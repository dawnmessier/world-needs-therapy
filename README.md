## The World Needs Therapy

### Goal

Provide personal opinions and stories to improve people's lives by discussing main issues that humans struggle with

#### Topics

*optional*

- Denial
- Self-Esteem
- Compliance
- Control
- Avoidance
- Anxiety
- Depression

### Tech Stack

*MERN*

- Frontend: React/Redux
- APIs: NodeJs/Express
- DB: Mongo/Mongoose

### Features/Specs

#### Blog Post List

##### Phase 1

- [ ] Title
- [ ] Date created/updated
- [ ] Author (or Anonymous)
- [ ] Topics (checkboxes)
- [ ] Text
- [ ] Filter by topic
- [ ] Status: 'public' or 'private'

##### Phase 2

- [ ] Images *(file upload?)*
- [ ] Videos *(restricted to YouTube or Vimeo)*
- [ ] Pagination
- [ ] Sort by date
- [ ] Filter by author
- [ ] Commenting *(third party?)*

#### Account/Logged In

##### Users/Authors

- Authorized login with role levels
    - [ ] Add user
    - [ ] Edit user
    - [ ] Delete user
- Role levels
    - 1: create *Create post*
    - 2: edit *Edit posts*
    - 3: delete *Delete posts*
    - 4: publish *Publish posts.*
    - 5: account *Account management: user accounts, role levels and topic list*
- **DB Table: Users**
    - id: Mongoose ObjectId: required
    - firstName: String(40): required
    - lastName: String(40): required
    - username: String(40): required: **UNIQUE** *(author display name)*
    - email: String(256): required: **UNIQUE**
    - password: String(256): required *(hashed password)*
    - roles: [Mongoose ObjectId, Mongoose ObjectId]: required *(primary key from Roles table)*

##### Posts

- [ ] Add post
- [ ] Edit post
- [ ] Delete post
- **DB Table: Posts** (all html safe)
    - id: Mongoose ObjectId: required
    - title: String(200): required: **UNIQUE**
    - author: Mongoose ObjectId: required *(primary key from Users table)*
    - anonymous: Boolean: default=false
    - topics: [Mongoose ObjectId, Mongoose ObjectId]: optional *(primary key from Topics table)*
    - contentType: String(20): required
    - content: String(5000): required
    - dateCreated: datetime: required
    - dateUpdated: datetime: optional
    - imageUrl: String(256): optional
    - videoUrl: String(256): optional
    - status: Mongoose ObjectId: required *(primary key from Status table)*

##### Topics

- [ ] Add topic
- [ ] Edit topic
- [ ] Delete topic
- **DB Table: Topics**
    - id: Mongoose ObjectId: required
    - topic: String(52): required: **UNIQUE**

##### Status

- No CRUD needed
- **DB Table: Status**
    - id: Mongoose ObjectId: required
    - status: String(40): required: **UNIQUE**

##### Roles

- No CRUD needed
- **DB Table: Roles**
    - id: Mongoose ObjectId: required
    - status: String(12): required: **UNIQUE**
