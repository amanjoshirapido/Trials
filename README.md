Assignment



## Startup

Start by cloning the project ```git clone git@github.com:amanjoshirapido/Trials.git```
install All the dependencies using npm i or npm install 
run node app.js after installation is done 
The MongoDB and redis are running on their default port ``` 27017 ``` and ```6379``` respectively.

## API Endpoints
1. get filteredOnTitleAndDescription -> A basic search API to search the stored videos using their title and description.Optimised api to search videos containing partial match for the search query.
2. get filteredOnPageNumberAndPageLimit ->A GET API which returns the stored video data in a paginated response sorted in descending order of published datetime.
4. Using redis for caching the response 


