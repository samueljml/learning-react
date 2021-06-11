## First React App

### Knowledge TODO
- axios
- API integration
- http
- js
- ts
- jsx/tsx
- node
- git

--------
## Technical content

### HTML (HyperText Markup Language)

It's a markup language that uses tags to identify content. Every web page's are built in HTML, it is the main structure and the base. The HTML are represent the content layer, where the information seen on the page is stored.

### CSS (Cascading Style Sheets)

It's a StyleSheet language used to define how HTML or XML documents are displayed. CSS uses properties to describe how the elements will be shown. CSS is cascading because allows to apply one style on top of another, hierarchically.
- Flexbox (Flexible Box Layout): It's a CSS web layout. It provides an efficient way to distribute and align elements, managing the space between them and wrapping when is necessary. The elements in a flex box are distributing dynamically.
- Grid Layout: It's is a CSS web layout. It provedes a layout based in two-dimensional grid system, like tables, with rows and columns, making it easier to design web pages without having to uso floats and positioning.

### HTTP (Hypertext Tranfer Protocol)

In short, HTTP is a protocol that will exchange information (resources) between a client and server. HTTP is stateless, so its transactions are independent and it's not related to any other transaction. HTTP in main cases uses TCP as its transport level protocol, which defines how data is sent from one place to the other and the metadata. The HTTP has request methods to indicate the action to be performed, one of them is:
Método  | Function                      											         |   Retrieves   |
:------ | :----------------------------------------------------------------- | :------------ |
GET     | Request to search of one or many resources.  				 | Resource data |
POST    | Request to submit a specified resource. Can change state or case side effeccts on the server |
PUT    | Request to replace all current representations of the target  |
PATCH    | Request to apply partial modifications to a resource |
DELETE | Request to delete a specified resource |
OPTIONS | Request to describe the communication options | show allowed methods

### Web assembly

It's basically a bytecode, it's the low-level format. Its goal is to become a universal technology for web application development, improving performance and making native application resources available for web development. This will make any language that generates this bytecode can be used for web development.

### Web socket

Makes a two-way interactive communication session between the user's browser and a server. It makes the communication faster, because you don't need to make several requests, since the connection is continuous.

### Fetch API

It's a JavaScript interface for fetching resources. This interface allows access and manipulation parts of the HTTP, such as requests and responses. Fetch API provides a global method **fetch()** to get resources across the network.

### Promises
It's an object to represent the return of an asynchronous operation requested and its resulting value. With promises it is possible to write the code non-linearly, at the same time, multithreading.

### React

It's a JavaScript lib to the development of front-end application interfaces. At the main of all react applications or components, there are an essentially a piece of the user interface, so in every application built in react has a bunch of independent and reusable components to compose a build complex interface.

- States: It's an object to storage a component's state. It's a way to influence what is rendered on the screen, it manage within the component and the variables declared in the function body.
- Hooks: It allows the use of state and other resources without creating classes. They protect the reuse of state logic between components. Custom hooks can be created. Hook make the code look cleaner and easier to read.
- Data binding: It's one-way data binding: from owner to child.That makes the code easier to understand, the changes are made explicitly by the developer, using the function setState for the state to be changed. This way we have much more predictability and security in our application.