#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
import numpy as np
import sys as sys
import mysql.connector as sql
from sklearn.model_selection import train_test_split
import category_encoders as ce
from sklearn.neural_network import MLPClassifier
from sklearn.metrics import accuracy_score


# In[2]:



db_connection = sql.connect(
    host = '127.0.0.1',
    database = 'peopledb',
    user = 'peopleAdmin',
    password = 'admin'
)

cursor = db_connection.cursor()


# ### CANDIDATE DATAFRAME

# In[3]:


positionId = sys.argv[1]
positionId = 2
# print(positionId)


# In[4]:


cursor.execute('''
    SELECT 
        candidates.id,
        candidates_positions_accepted.position_id,
        candidates.name,
        candidates_positions_accepted.accepted,
        candidates.description,
        candidates.title,
        candidates.location,
        candidates.desired_salary_range,
        candidates.years_of_experience
    FROM candidates, positions, candidates_positions_accepted
    WHERE 
      candidates.id = candidates_positions_accepted.user_id AND
      positions.id = candidates_positions_accepted.position_id AND 
      candidates_positions_accepted.user_id > 0 AND 
      positions.id = %s
''',(positionId,))


# In[ ]:





# In[5]:


table = cursor.fetchall()


# In[6]:


# print(type(list(table)))


# In[7]:


candiadte_df = pd.DataFrame(list(table))


# In[8]:


candiadte_df.columns = ["id","position_id","name","accepted","description","title","location","salary_range","years_of_experience"]


# In[9]:


# with pd.option_context('display.max_rows', None, 'display.max_columns', None):  # more options can be specified also
#     display(candiadte_df)


# ### SKILLS DATAFRAME

# In[10]:


cursor.execute('''
SELECT candidates.id, candidates.name, skill
FROM skills, users_skills, candidates
WHERE 
    skills.id = users_skills.skill_id AND 
    users_skills.user_id = candidates.id
''')


# In[11]:


skill_table = cursor.fetchall()


# In[12]:


skills_df = pd.DataFrame(list(skill_table),columns = ["id","name","skill"])


# In[13]:


# with pd.option_context('display.max_rows', None, 'display.max_columns', None):  # more options can be specified also
#     display(skills_df)


# In[14]:


table = pd.pivot_table(skills_df, index=['name'],
columns=['skill'], aggfunc='count', fill_value = 0)


# In[15]:


name_skill_df = table['id']


# In[16]:


# with pd.option_context('display.max_rows', None, 'display.max_columns', None):  # more options can be specified also
#     display(name_skill_df)


# ### DF MERGE

# In[17]:


full_df = pd.merge(
    candiadte_df,
    name_skill_df,
    left_on = "name",
    right_on ="name"
)


# In[18]:


# with pd.option_context('display.max_rows', None, 'display.max_columns', None):  # more options can be specified also
#     display(full_df[full_df.accepted == 1.0])


# ### TRAINING DATA

# In[19]:


training_data = full_df[full_df.accepted >= 0]
# full_df[full_df.accepted == 0.0 | full_df.accepted == 1.0
training_data.shape


# In[ ]:





# ### MLP USING DF

# In[ ]:





# #### Using One Hot Encoding (OHE) to transform the categorical values into numeric values that the MLP can train on

# In[20]:


ohe = ce.OneHotEncoder(handle_unknown='value', use_cat_names=True, cols=["title","location","salary_range","years_of_experience"])


# In[21]:


#Pull all data with an 'accepted' value of 1.0 (aka 'True')
unseen_data = full_df[(full_df.accepted != 1) & (full_df.accepted != 0)]

#Dropping columns that we dont want to train on 
unseen_data_dirty = unseen_data.drop(["accepted","name","description"], axis=1)

#Using OHE to trasform cat values into numeric
unseen_data_clean = ohe.fit_transform(unseen_data_dirty)

#Using get_dummies to generate the columns (features) that need to be added to the training data so shapes match
unseen_encoded_dummies = pd.get_dummies(unseen_data_clean, dummy_na= True)


# In[ ]:





# In[22]:


#Adding the columns from unseen_encoded_dummies to training_data so MLP shape will match
training_encoded_for_model = training_data.reindex(columns = unseen_encoded_dummies.columns, 
    fill_value=0)
training_encoded_for_model.shape


# In[37]:


X_dirty = training_data.drop(["accepted","name","description"], axis=1)


# In[39]:


X = ohe.fit_transform(X_dirty)
# X = training_encoded_for_model
# X.head()


# In[ ]:





# In[40]:


y = training_data["accepted"]


# In[41]:


X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=123)


# In[42]:


# X_train.head()


# In[43]:


model = MLPClassifier()


# In[44]:


trained_model = model.fit(X_train, y_train)


# In[ ]:





# In[45]:


accuracy_score(y_train, model.predict(X_train))


# In[46]:


# X = ohe.fit_transform(X_dirty)


# In[47]:


unseen_data = full_df[full_df.accepted < 2]
unseen_data.shape


# In[48]:


# Test encoded column need to be added to my training data colums as dummy inputs


# In[49]:


unseen_data_dirty = unseen_data.drop(["accepted","name","description"], axis=1)


# In[50]:


unseen_data_clean = ohe.fit_transform(unseen_data_dirty)
unseen_data_clean.shape


# In[51]:


results = trained_model.predict(unseen_data_clean)
results.shape


# In[52]:


results_df = pd.DataFrame(results,columns=["accepted"])
results_df.shape


# In[53]:


# predicted_candidates = pd.merge(
#     results_df,
#     full_df
# )
full_df['predictions'] = results_df


# In[54]:


# full_df.head(40)


# In[55]:


print(full_df.to_csv())


# In[ ]:


# predicted_candidates.head(50)


# In[ ]:


# print(predicted_candidates.to_csv())


# In[ ]:


# predicted_candidates.to_json()


# In[ ]:




