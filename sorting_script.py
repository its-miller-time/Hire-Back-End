#!/usr/bin/env python
# coding: utf-8

# In[698]:


import pandas as pd
import numpy as np
import sys as sys
from matplotlib import pyplot as plt

# In[699]:


import mysql.connector as sql

db_connection = sql.connect(
    host = '127.0.0.1',
    database = 'peopledb',
    user = 'peopleAdmin',
    password = 'admin'
)

cursor = db_connection.cursor()


# ### CANDIDATE DATAFRAME

# In[700]:
positionId = sys.argv[1]


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



# cursor.execute('''
# SELECT 
#     candidates.id,
#     candidates_positions_accepted.position_id,
#     candidates.nameFirst,
#     candidates_positions_accepted.accepted,
#     candidates.description,
#     candidates.most_recent_job_role,
#     candidates.desired_location_city,
#     candidates.desired_salary_range,
#     candidates.years_of_experience
# FROM candidates,positions, candidates_positions_accepted
# WHERE 
#     candidates.id = candidates_positions_accepted.user_id AND
#     candidates_positions_accepted.position_id = positions.id 
# ''')


# In[701]:


table = cursor.fetchall()


# In[702]:




# In[703]:


candiadte_df = pd.DataFrame(list(table))
# In[704]:

candiadte_df.columns = ["id","position_id","name","accepted","description","title","location","salary_range","years_of_experience"]


# In[705]:


# candiadte_df.head()


# ### SKILLS DATAFRAME

# In[706]:


cursor.execute('''
SELECT candidates.id, candidates.name, skill
FROM skills, users_skills, candidates
WHERE 
    skills.id = users_skills.skill_id AND 
    users_skills.user_id = candidates.id
''')


# In[707]:


skill_table = cursor.fetchall()


# In[708]:


skills_df = pd.DataFrame(list(skill_table),columns = ["id","name","skill"])


# In[710]:

table = pd.pivot_table(skills_df, index=['name'],
columns=['skill'], aggfunc='count', fill_value = 0)

# In[711]:

name_skill_df = table['id']

# In[845]:
# ### DF MERGE
# In[713]:
full_df = pd.merge(
    candiadte_df,
    name_skill_df,
    left_on = "name",
    right_on ="name"
)

# In[714]:


# ### TRAINING DATA

# In[729]:

training_data = full_df[full_df.accepted >= 0]


# In[ ]:





# ### MLP USING DF

# In[846]:


import matplotlib.pyplot as plt 
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
import category_encoders as ce
import seaborn as sns


# #### Using One Hot Encoding (OHE) to transform the categorical values into numeric values that the MLP can train on

# In[847]:


ohe = ce.OneHotEncoder(handle_unknown='value', use_cat_names=True, cols=["title","location","salary_range","years_of_experience"])


# In[848]:


#Pull all data with an 'accepted' value of 1.0 (aka 'True')
unseen_data = full_df[full_df.accepted != 1.0]

#Dropping columns that we dont want to train on 
unseen_data_dirty = unseen_data.drop(["accepted","name","description"], axis=1)

#Using OHE to trasform cat values into numeric
unseen_data_clean = ohe.fit_transform(unseen_data_dirty)

#Using get_dummies to generate the columns (features) that need to be added to the training data so shapes match
unseen_encoded_dummies = pd.get_dummies(unseen_data_clean, dummy_na= True)


# In[ ]:





# In[849]:


#Adding the columns from unseen_encoded_dummies to training_data so MLP shape will match
training_encoded_for_model = training_data.reindex(columns = unseen_encoded_dummies.columns, 
    fill_value=0)
training_encoded_for_model.head()


# In[850]:


# X_dirty = training_data.drop(["accepted","name","description"], axis=1)


# In[851]:


# X = ohe.fit_transform(X_dirty)
X = training_encoded_for_model


# In[ ]:





# In[852]:


y = training_data["accepted"]


# In[853]:


X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=123)


# In[742]:


from sklearn.neural_network import MLPClassifier


# In[743]:


model = MLPClassifier()


# In[744]:


trained_model = model.fit(X_train, y_train)


# In[753]:


from sklearn.metrics import accuracy_score


# In[754]:


accuracy_score(y_train, model.predict(X_train))


# In[856]:


# X = ohe.fit_transform(X_dirty)


# In[857]:


unseen_data = full_df[full_df.accepted != 1 ]


# In[858]:


# Test encoded column need to be added to my training data colums as dummy inputs


# In[859]:


unseen_data_dirty = unseen_data.drop(["accepted","name","description"], axis=1)


# In[860]:


unseen_data_clean = ohe.fit_transform(unseen_data_dirty)
# unseen_data_clean.head()


# In[861]:


results = trained_model.predict(unseen_data_clean)


# In[869]:


results_df = pd.DataFrame(results,columns=["accepted"])

# In[865]:


predicted_candidates = pd.merge(
    results_df,
    full_df
)

full_df['predictions'] = results_df

# In[870]:




# In[871]:


# print(predicted_candidates.to_csv())
# print(predicted_candidates.to_csv())
# print(full_df.head())
print(full_df.to_json(orient='records'))


# In[ ]:




