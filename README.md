# StriveM6D2
Strive Blog API


You are in charge of improving last module APIs for the Strive Blog application by adding MongoDB

In this "step" the application should enable the creation, editing, deletion, listing of blog posts

Blog posts should contain following information:

{
	    "_id": "MONGO GENERATED ID",
	    "category": "ARTICLE CATEGORY",
	    "title": "ARTICLE TITLE",
	    "cover":"ARTICLE COVER (IMAGE LINK)",
	    "readTime": {
	      "value": 2,
	      "unit": "minute"
	    },
	    "author": {
	      "name": "AUTHOR NAME",
	      "avatar":"AUTHOR AVATAR LINK"
	    },
	    "content": "HTML",
	    "createdAt": "DATE",
        "updatedAt": "DATE"           
}

The backend should include the following routes:

GET /blogPosts => returns the list of blogPosts 
GET /blogPosts /123 => returns a single blogPost
POST /blogPosts => create a new blogPost
PUT /blogPosts /123 => edit the blogPost with the given id
DELETE /blogPosts /123 => delete the blogPost with the given id

The persistence must be granted via MongoDB


EXTRA
Complete Query exercises from this morning 🤓