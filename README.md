# Safety Patch

![covid2](https://user-images.githubusercontent.com/45616379/82766736-2c4c9500-9dd6-11ea-9973-59517edf678d.png)
![covid1](https://user-images.githubusercontent.com/45616379/82766738-2eaeef00-9dd6-11ea-8455-52bb1fc5f114.png)

<img width="1416" alt="Screen Shot 2020-05-24 at 10 52 27 AM" src="https://user-images.githubusercontent.com/45616379/82766713-0aeba900-9dd6-11ea-8e43-2d0dfc2d9ab6.png">
<img width="1415" alt="Screen Shot 2020-05-24 at 10 52 16 AM" src="https://user-images.githubusercontent.com/45616379/82766716-0b843f80-9dd6-11ea-8fd3-80ba56c329bf.png">

This project was submitted to Open Hacks 2020. I had 3 other teammates ([Gabriel](https://github.com/gabsong), 
[Nico](https://github.com/estradanicolas), and [Michelle](https://devpost.com/myjkim13)). This README will focus on my mainly my **individual** contributions/experiences. 

Here is our demo video: https://www.youtube.com/watch?v=5D4MgRfHOz0&feature=emb_title

## Inspiration
We want to help our front line heroes leverage technology to scale their operations. We discovered that while a lot of 
healthcare professionals are exposed to COVID-19, there are no good alternatives for quarantine. Since hospitality business 
is at an all-times low, hotels have expressed their desire to help. We want to enable these communities help each other.

## What it does
Hotels can send us their healthcare and front line worker specific promo codes, which we create a directory on our site. 
Administrators for the healthcare and front line organizations can inform their teams to request for accommodation. Then, 
the administrator can use the promo codes provided by the hotel to continue the booking at the hotel website, thus ensuring 
that the right parties are offered the discount, and our service does not need to manage an inventory. For the individual 
healthcare and front line worker it's really easy: register with their ID and submit a request, all from the mobile browser.

## How I built it
For the backend, I first created 3 different Mongo Schemas/Models. For first respondents, hotels, and middle agencies.
Then I registered for MongoDB Atlas (cloud-based Mongo Database), and linked my express server to a cluster. Next,
I made the same 3 GraphQL Object Types (Respondents, Hotels, and Agencies). With these new Object types, I created many
operations on my root query and mutation query. 

Root Query:
1. Get ALL agencies 
2. Get ALL hotels 
3. Get ONE hotel, given an ID
4. Get ALL Respondents, given an agency ID
5. Get ONE Respondent based on its ID

Mutation Query:
1. Add a Hotel
2. Add an Agency
3. Add Respondent, given the name of a valid Agency (Linked)

Clientside, I used Apollo Client to create queries that I could use on the frontend to get/post data from/to the database.

I also had some contribution on some pages of the frontend (Hotels Page, Respondents Page, and styling on Login/Signup Page).
I used React(hooks) and bootstrap for all my frontend contribution.

## Challenges I ran into
One of the first challenges I had was setting a relation between two GraphQL types. I kept getting errors on how I am importing
one of the types before defining it. Both GraphQL Types depended on each other so I was very confused on how to get it to 
work. The way I got around it was importing one of the GraphQLType, when defining the other's parameters. 

Another major problem I had was integrating my backend to the frontend. Like I mentioned above, I used Apollo Client, but I
intially had a difficult time using it in the React App. I have used it before, but the client kept trying to access the server
at the same port as the client, even though my server was at a completely different port. I eventually did figure out 
configurations that led to me access the right url for my server. 

##Accomplishments that I am proud of
I'm proud of our team, having built a product with potential for large impact in the current environment. I'd love to see 
this app being used and get a lot of feedback to keep improving it.

## What I learned
There are many things I learned. First I finally learned how to connect a GraphQL backend to a 'create-react-app' frontend.
Also, I got more confidence in the Mongo database. We learned that the initial idea had to be adjusted based on user's needs 
and existing infrastructure. We tried to strike the best balance between usability and features.

## What's next for Safety Patch
Get it in front of users! Have them try it and make sure it delivers value to them
