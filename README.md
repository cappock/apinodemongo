# apinodemongo

# Students API

  

### **Pre-requisites**

  

- Git - [Installation guide here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

- Docker - [Installation guide here](https://docs.docker.com/engine/install/)

- Docker-compose - [Installation guide here](https://docs.docker.com/compose/install/)

  

### **Importance of docker**

  

The importance of the use of containers lies in the ease of execution and distribution of applications, especially when working on equipment. Containers eliminate the "on my machine if I ran" that we are used to, standardizing the development and production environment.

  
### **How to run**

1. Clone the repository using one of the options that github allows.

2. Enter the project folder, in linux use the command cp .env.example .env to generate the file with the example environment variables. 

    **Note:** If you want to set other environment variables, simply use the above command and modify them in some text editor.

3. To be able to run the project you must create the volume and the network, for this you launch the command `docker network create ing-web` and for the `docker volume create dbdata`.

4. Run `docker-compose -f Docker-compose.yaml up --build`

### **How to use the API**
  
- ***Get:***

	- Get all students: 
		```json
        curl --request GET \
            --url http://localhost:4000/students
		```

	- Get student by id: 
		```json
		curl --request GET \ 
		    --url http://localhost:4000/students/5fdae088a819cafc65bedc5d
		```
	
	- Get average:
		```json
		curl --request GET \
  			--url http://localhost:4000/students/average
		```
  

- ***Post:*** 
	- Create a new stundent: 
		```json
		curl --request POST \
		--url http://localhost:4000/students/add \ 
		--header 'Content-Type: application/json' \
		--data '{
			"name": "Daniel Santa",
			"id": "1",
			"grades": [4, 4.3, 4.5],
			"approved": true
		}'
		```

- ***Put:***
	-  Update a student: 
		```json
		curl --request PUT \
		  --url http://localhost:4000/students/5fdae088a819cafc65bedc \
		  --header 'Content-Type: application/json' \
		  --data '{
				"name": "Daniel Santa",
				"id": "1",
				"grades": [5, 4.3, 3],
				"approved": true
		}'
		```

- ***Delete:***
	-  Delete a student:
		```json
        curl --request DELETE \
            --url http://localhost:4000/students/5fda837f3337484700217e5e
		```
	- Delete with criterion: 
		```json
		curl --request DELETE \
		    --url http://localhost:4000/students/approved/3.2
		```
