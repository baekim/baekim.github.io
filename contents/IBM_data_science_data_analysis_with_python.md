---
date: '2021-09-10'
title: '[Coursera] Data Analysis with Python Quiz'
categories: ['Coursera', 'IBM Professional Certificate', 'Data Science']
summary: 'Data Analysis with Python Quiz'
thumbnail: './images/coursera_IBM_data_science.png'
---

## Quiz

📌 Each column contains a:

- <span style='color: red'>attribute or feature</span>
- different used car

<br/>📌 What description best describes the library Pandas?

- Includes functions for some advanced math problems as listed in the slide as well as data visualization.
- <span style='color: red'>Offers data structure and tools for effective data manipulation and analysis. It provides fast access to structured data. The primary instrument of Pandas is a two-dimensional table consisting of columns and rows labels which are called a DataFrame. It is designed to provide an easy indexing function.</span>
- Uses arrays as their inputs and outputs. It can be extended to objects for matrices, and with a little change of coding, developers perform fast array processing.

<br/>📌 What task does the following lines of code perform?

```python
path='C:\Windows\…\ automobile.csv'
df.to_csv(path)
```

- <span style='color: red'>Exports your Pandas dataframe to a new csv file, in the location specified by the variable path.</span>

- Loads a csv file.

<br/>📌 What does csv stand for?

- <span style='color: red'>Comma Separated Values</span>
- Car Sold values
- none of the above

<br/>📌 What library is primarily used for machine learning

- <span style='color: red'>scikit-learn</span>
- Python
- Matplotlib

<br/>📌 What task does the following command perform?

```python
df.to_csv("A.csv")
```

- change the name of the column to "A.csv"

- load the data from a csv file called "A" into a dataframe
- <span style='color: red'>Save the dataframe df to a csv file called "A.csv"</span>

<br/>📌 Consider the segment of the following dataframe:
What is the type of the column make?

- int64
- float64
- <span style='color: red'>object</span>

<br/>📌 How would you access the column "symboling” from the dataframe df?

- <span style='color: red'>df["symboling"]</span>
- df=="symboling"

<br/>📌 What is the correct symbol for missing data?

- <span style='color: red'>nan</span>
- no-data

<br/>📌 How would you rename the column "city_mpg" to "city-L/100km"?

- df.rename(columns={”city_mpg”: “city-L/100km”})
- <span style='color: red'>df.rename(columns={”city_mpg”: “city-L/100km”}, inplaice=True)</span>

<br/>📌 Why do we convert values of Categorical Variables into numerical values?

- To save memory
- <span style='color: red'>Most statistical models cannot take in objects or strings as inputs</span>

<br/>📌 Consider the dataframe df; what method provides the summary statistics?

- <span style='color: red'>describe()</span>
- head()
- tail()

<br/>📌 If we have 10 columns and 100 samples, how large is the output of df.corr()?

- 10 x 100
- 10x10
- 100x100

<br/>📌 If the p-value of the Pearson Correlation is 1, then ...

- The variables are correlated
- The variables are not correlated
- <span style='color: red'>None of the above</span>

<br/>📌 Consider the following dataframe:

```python
df_test = df[['body-style', 'price']]
```

The following operation is applied:

```python
df_grp = df_test.groupby(['body-style'], as_index=False).mean()
```

What are the resulting values of: df_grp[‘price’]?

- <span style='color: red'>The average price for each body style</span>
- The average price
- The average body style

<br/>📌 What is the Pearson Correlation between variables X and Y, if X=-Y?

- -1
- 1
- 0

<br/>📌 What does the following line of code do?

```python
lm = LinearRegression()
```

- Fit a regression object lm

- <span style='color: red'>Create a linear regression object </span>
- Predict a value

<br/>📌 What steps do the following lines of code perform?

```python
Input=[('scale',StandardScaler()),('model',LinearRegression())]
pipe=Pipeline(Input)
pipe.fit(Z,y)
ypipe=pipe.predict(Z)
```

- Standardize the data, then perform a polynomial transform on the features Z

- Find the correlation between Z and y
- <span style='color: red'>Standardize the data, then perform a prediction using a linear regression model using the features Z and targets y</span>

<br/>📌 If X is a dataframe with 100 rows and 5 columns, and y is the target with 100 samples, and assuming all the relevant libraries and data have been imported, and the following line of code has been executed:

```python
LR = LinearRegression()
LR.fit(X, y)
yhat = LR.predict(X)
```

How many samples does ㅅhat contain?

- <span style='color: red'>500</span>
- 5
- 100

<br/>📌 What value of R^2 (coefficient of determination) indicates your model performs best?

- -1
- <span style='color: red'>1</span>
- 0

<br/>📌 Consider the following equation:

```python
Y = b0 + b1x
```

What is the parameter b_0 (b subscript 0)?

- The predictor or independent variable
- The target or dependent variable
- <span style='color: red'>The intercept </span>
- The slope

<br/>📌 What is the output of the following code?

```python
cross_val_predict (lr2e, x_data, y_data, cv=3)
```

- <span style='color: red'>The predicted values of the test data using cross-validation</span>

- The average R^2 on the test data for each of the two folds
- This function finds the free parameter alpha

<br/>📌 What dictionary value would we use to perform a grid search for the following values of alpha? `1, 10, 100` No other parameter values should be tested

- alpha=[1,10,100]
- [{'alpha': [1,10,100]}]
- <span style='color: red'>[{'alpha': [0.001,0.1,1, 10, 100, 1000,10000,100000,100000],'normalize':[True,False]} ]</span>

<br/>📌 You have a linear model; the average R^2 value on your training data is 0.5, you perform a 100th order polynomial transform on your data then use these values to train another model. After this step, your average R^2 is 0.99; which of the following comments is correct?

- You should always use the simplest model
- 100-th order polynomial will work better on unseen data
- <span style='color: red'>The results on your training data is not the best indicator of how your model performs; you should use your test data to get a better idea</span>

<br/>📌 What type of file allows data to be saved in a tabular format?

- html
- pdf
- <span style='color: red'>csv</span>

<br/>📌 What Python libraries were considered "Algorithmic Libraries" in this course?

- Pandas, Numpy, SciPy
- <span style='color: red'>Scikit-learn, Statsmodels</span>
- Matplotlib, Seaborn

<br/>📌 What path tells us where the data is stored?

- Scheme path
- <span style='color: red'>File path</span>
- Encoding path

<br/>📌 What does the head() method return?

- It returns the data types of each column
- It returns the last five rows
- <span style='color: red'>It returns the first five rows</span>

<br/>📌 The Pandas library allows us to read what?

- Only headers
- <span style='color: red'>Various datasets into a data frame</span>
- Only rows

<br/>📌 The Pandas library is mostly used for what?

- <span style='color: red'>Data analysis</span>
- Machine learning
- Data visualization

<br/>📌 What would the following code segment output from a dataframe df? df.head(5)

- <span style='color: red'>It would return the first 5 rows of the dataframe</span>
- It would return the last 5 rows of the dataframe
- It would return all of the rows of the dataframe

<br/>📌 What does the following code segment perform in a dataframe?

```python
mean = df["normalized-losses"].mean() df["normalized-losses"].replace(np.nan, mean)
```

- <span style='color: red'>It replaces the missing values in the column "normalized-losses" with the mean of that column</span>

- It drops rows that contain missing values
- It drops all of the rows in the column "normalized-losses"

<br/>📌 How would you multiply each element in the column df["c"] by 5 and assign it back to the column df["c"]?

- 5 * df["b"]
- <span style='color: red'>df["c"] = 5 * df["c"] </span>
- df["a"] = df["c"] * 5

<br/>📌 What function returns the maximum of the values requested for the requested column?

- <span style='color: red'>max()</span>
- std()
- min()

<br/>📌 Since most statistical models cannot take objects or strings as inputs, what action needs to be performed?

- Convert numerical values into categorical variables
- <span style='color: red'>Convert categorical variables into numerical values</span>

<br/>📌 What function will change the name of a column in a dataframe?

- <span style='color: red'>rename()</span>
- replace()
- exchange()
