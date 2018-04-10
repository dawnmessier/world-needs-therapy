## The World Needs Therapy

### Goal

Provide personal opinions and stories to improve people's lives by discussing main issues that humans struggle with

#### Topics

- Denial
- Self-Esteem
- Compliance
- Control
- Avoidance
- Anxiety
- Depression

### Tech Stack

- Frontend: React/Redux
- APIs: NodeJs/Express
- DB: MySQL

*Version of MERN*

### Features/Specs

#### Blog Post List

##### Phase 1

- [ ] Title
- [ ] Date created/updated
- [ ] Author (or Anonymous)
- [ ] Topic
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

- Authorized login with permission levels
    - Add user
    - Edit user
    - Delete user
- Permission levels
    - 1: basic *Create post*
    - 2: intermediate *Create and edit posts*
    - 3: full *Create, edit and delete posts. Account management: user accounts, permission levels and topic list. Publish posts.*
- **DB Table: Users**
    - id: int: required
    - firstName: nvarchar(40): required
    - lastName: nvarchar(40): required
    - username: nvarchar(40): required *(author display name)*
    - email: nvarchar(256): required
    - password: nvarchar(256): required *(hashed password)*
    - permissionId: int: required *(primary key from Permissions table)*

##### Posts

- Add post
- Edit post
- Delete post
- **DB Table: Posts** (all html safe)
    - id: int: required
    - title: nvarchar(200): required
    - authorId: int: required *(primary key from Users table)*
    - anonymous: bool: default=false
    - topicId: int: optional *(primary key from Topics table)*
    - text: nvarchar(5000): required
    - dateCreated: datetime: required
    - dateUpdated: datetime: optional
    - imageUrl: nvarchar(256): optional
    - videoUrl: nvarchar(256): optional
    - statusId: int: required *(primary key from Status table)*

##### Topics

- Add topic
- Edit topic
- Delete topic
- **DB Table: Topics**
    - id: int: required
    - topic: nvarchar(52): required

##### Status

- No CRUD needed
- **DB Table: Status**
    - id: int: required
    - status: nvarchar(40): required

##### Permissions

- No CRUD needed
- **DB Table: Permissions**
    - id: int: required
    - status: nvarchar(12): required
