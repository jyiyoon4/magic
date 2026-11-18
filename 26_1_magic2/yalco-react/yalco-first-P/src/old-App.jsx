// import './App.css';

// function BasicExpressions() {
//   const name = 'John';
//   const age = 25;
//   const isAdmin = true;

//   return (
//     <div>
//       <p>Name: {name}</p>
//       <p>Age next year: {age + 1}</p>
//       <p>{name + "'s Profile"}</p>
//       <p>{`${name} is ${age} years old`}</p>
//       <p>Admon status: {String(isAdmin)}</p>
//     </div>
//   );
// }

// function App() {
//   return <BasicExpressions />;
// }

// export default App;

// -----------------------------------------------------------------

// import './App.css';

// function ObjectArrayExpressions() {
//   const user = {
//     name: 'Jane',
//     email: 'jane@example.com',
//   };
//   const colors = ['red', 'blue', 'green'];
//   const numbers = [1, 2, 3, 4, 5];

//   return (
//     <div>
//       <p>
//         user: {user.name}({user.email})
//       </p>
//       <p>first color: {colors[0]}</p>
//       <p>Color count: {colors.length}</p>

//       <p>Doubleds: {numbers.map((n) => n * 2).join(',')}</p>
//       <p>Event: {numbers.filter((n) => n % 2 === 0).join(',')}</p>
//     </div>
//   );
// }

// function App() {
//   return <ObjectArrayExpressions />;
// }

// export default App;

// -----------------------------------------------------------------

// import './App.css';

// function FunctionExpressions() {
//   const getGreeting = (name) => `Hello, ${name}!`;

//   const formatDate = (date) => {
//     return new Date(date).toLocaleDateString();
//   };

//   const calculateTotal = (items) => {
//     return items.reduce((sum, item) => sum + item.price, 0);
//   };

//   const items = [
//     { id: 1, price: 10 },
//     { id: 2, price: 20 },
//   ];

//   return (
//     <div>
//       <p>{getGreeting('Alice')}</p>
//       <p>Today: {formatDate(new Date())}</p>
//       <p>Total: ${calculateTotal(items)}</p>
//       <p>
//         Good{' '}
//         {(() => {
//           const hours = new Date().getHours();
//           return hours < 12 ? 'morning!' : 'afternoon!';
//           //  (조건) ? (T 경우) : (F 경우);
//           //  조건문: ? 앞에가 맞으면 ":" 앞에꺼, 틀림 뒤에꺼.
//         })()}
//       </p>
//     </div>
//   );
// }

// function App() {
//   return <FunctionExpressions />;
// }

// export default App;

// -----------------------------------------------------------------

// import './App.css';

// const element1 = <h2>Hello, world!</h2>;
// const element2 = (
//   <ul>
//     <li>A</li>
//     <li>B</li>
//     <li>C</li>
//   </ul>
// );

// function ElementExpressions() {
//   return (
//     <section>
//       {element1}
//       {element2}
//     </section>
//   );
// }

// function App() {
//   return <ElementExpressions />;
// }

// export default App;

// -----------------------------------------------------------------
// ------------------------  6강  ------------------------------
// -----------------------------------------------------------------

// import './App.css';

// function App() {
//   const isLoggedIn = true;

//   return (
//     <>
//       {<h1>JSX</h1>}

//       {isLoggedIn ? <h1>Hello!</h1> : <h1>Sign in</h1>}

//       {isLoggedIn ? (
//         <>
//           <h2>Welcome back!</h2>
//           <p>You are logged in. Enjoy your time here!</p>
//         </>
//       ) : (
//         <>
//           <h2>Hello, Guest!</h2>
//           <p>Please log in to access more features.</p>
//         </>
//       )}
//     </>
//   );
// }

// export default App;

// -----------------------------------------------------------------

// import './App.css';

// function getUserContent(userStatus) {
//   return userStatus === 'admin' ? (
//     <>
//       <h2>admin Dashboard</h2>
//       <button>Manage Users</button>
//     </>
//   ) : userStatus === 'admin' ? (
//     <p>Welcome!</p>
//   ) : (
//     <a href="/signup">Sign up here</a>
//   );
// }

// function App() {
//   return <>
//   {getUserContent('guest')}

//   </>;
// }

// export default App;

// -----------------------------------------------------------------

// import './App.css';

// function App() {
//   const hasMessages = true;
//   const message = null;

//   return (
//     <>
//       {hasMessages && <h2>You have new messages!</h2>}
//       {/*ㄴ앞의 값이 참이면 그 뒤에거가 그대로 렌더링 돼서 아타남*/}
//       {message && <p>Message : {message}</p>}

//       <p>Message : {message ?? <em>No message</em>}</p>
//       <p>Message : {message || <em>Empty</em>}</p>
//     </>
//   );
// }

// export default App;

// -----------------------------------------------------------------

// import './App.css'

// function App() {

//   return (
//     <>
//       {[
//         <button>A</button>,
//         <button>B</button>,
//         <button>C</button>
//       ]}
//     </>
//   )
// }

// export default App

// -----------------------------------------------------------------

// import './App.css';

// function App() {
//   const fruits = ['Apple', 'Banana', 'Cherry'];

//   return (
//     <>
//       <ul>
//         {fruits.map((fruit, index) => (
//           <li key={index}>
//             {index}
//             {fruit}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;

// -----------------------------------------------------------------

// import './App.css';

// function App() {
//   const books = [
//     { id: 1, title: 'React Basics', published: 0, publisher: 'Manning' },
//     { id: 2, title: 'Advanced Hooks', published: true, publisher: 'OReilly' },
//     { id: 3, title: 'JSX in Depth', published: false, publisher: 'Packt' },
//   ];
//   const publisheds = books.filter((book) => book.published);

//   return (
//     <>
//       {publisheds.length > 0 && <h2>P B</h2>}
//       {publisheds.length ? (
//         publisheds.map((book) => (
//           <article key={book.id}>
//             <strong>{book.title}</strong>
//             <em>-{book.publisher}</em>
//           </article>
//         ))
//       ) : (
//         <p>No P B found.</p>
//       )}
//     </>
//   );
// }

// export default App;

//===========================

// import './App.css';

// function App() {
//   const disableInput = true;

//   return (
//     <>
//       <label
//         htmlFor="username" // for
//       >
//         Username:
//       </label>
//       <input
//         type="text"
//         id="username"
//         className="input-field" // class
//         autoComplete="off" // autocomplete
//         maxLength={20} // maxlength
//         spellCheck={true} // spellcheck
//         readOnly={false} // readonly
//         tabIndex={0} // tabindex
//         disable={disableInput}
//         placeholder={disableInput ? '(DISABLE)' : 'Enter your name'}
//       />
//     </>
//   );
// }

// export default App;

//==========================

// import './App.css';
// import reactLogo from './assets/ggG.png';

// const reactLogoAlt = 'React Logo';
// console.log(reactLogo);

// function App() {
//   return (
//     <>
//       <img src={reactLogo} alt={reactLogoAlt} width={256} height={228} />
//     </>
//   );
// }

// export default App;

//==================================

// import './App.css';

// function App() {
//   return (
//     <>
//       <span
//         style={{
//           fontWeight: 'bold',
//           fontStyle: 'italic',
//         }}
//       >
//         Bold&Italic
//       </span>
//     </>
//   );
// }

// export default App;

//=================================

// import './App.css';

// function App() {
//   const divStyle = {
//     backgroundColor: 'lightblue',
//     margin: '12px',
//     padding: '20px',
//     borderRadius: '8px',
//   };

//   return (
//     <>
//       <div style={divStyle}>DIV 1</div>

//       <div
//         style={{
//           ...divStyle,
//           background: 'lightgreen',
//           color: 'darkblue',
//           fontWeight: 'bold',
//         }}
//       >
//         DIV 2
//       </div>
//     </>
//   );
// }

// export default App;

//===============================

// import './App.css';

// function App() {
//   const styleA = {
//     color: 'darkred',
//     fontWeight: 'bold',
//   };

//   const styleB = {
//     color: 'navy',
//     textDecoration: 'underline',
//   };

//   // false로도 값 변경 해보기
//   const isPrimary = true;

//   return (
//     <>
//       <div style={isPrimary ? styleA : styleB}>
//         This text has dynamic styling.
//       </div>

//       <span
//         style={{
//           fontSize: isPrimary ? '1.5em' : '1em',
//           opacity: isPrimary ? 1 : 0.5,
//         }}
//       >
//         So does this text.
//       </span>
//     </>
//   );
// }

// export default App;

//=================================

// import './App.css';
// import ButtonA from './ButtonA';
// import ButtonB from './ButtonB';

// function App() {
//   return (
//     <>
//       <ButtonA />
//       <ButtonB />
//     </>
//   );
// }

// export default App;

//===============================
// import './App.css';

// import InfoCard from './InfoCard';

// function App() {
//   return (
//     <>
//       <InfoCard
//         title="Props in React"
//         content="Props pass data from one component to another."
//         author="Alice"
//       />
//       <InfoCard
//         title="React Composition"
//         content="Composition makes your components more reusable"
//       />
//     </>
//   );
// }

// export default App;
// =====================================
// import './App.css'

// import InfoCard from './InfoCard'

// const cardData1 = {
//   title: "Props in React",
//   content: "Props pass data from one component to another.",
//   author: "Alice"
// };
// const cardData2 = {
//   title: "React Composition",
//   content: "Composition makes your components more reusable"
// };

// function App() {

//   return (
//     <>
//       <InfoCard {...cardData1} />
//       <InfoCard {...cardData2} />
//     </>
//   )
// }

// export default App
// =========================
// import './App.css'

// import InfoCard from './InfoCard'

// const cards = [
//   {
//     idx: 1,
//     title: "Props in React",
//     content: "Props pass data from one component to another.",
//     author: "Alice"
//   }, {
//     idx: 2,
//     title: "React Composition",
//     content: "Composition makes your components more reusable"
//   }
// ]

// function App() {

//   return (
//     <>
//       {cards.map(cardData => (
//         <InfoCard key={cardData.idx} {...cardData} />
//       ))}
//     </>
//   )
// }

// export default App
// ===================================
// import './App.css';

// import ProductCard from './ProductCard';

// const App = () => {
//   const product = {
//     name: 'Laptop',
//     price: 123.4567,
//   };

//   return <ProductCard {...product} formatPrice={(p) => `$${p.toFixed(2)}`} />;
// };

// export default App;
// ===========
// import './App.css';

// import CardLayout from './CardLayout';

// const App = () => (
//   <div>
//     <CardLayout title="About">
//       <p>Props of Components</p>
//     </CardLayout>

//     <CardLayout title="Details">
//       <ul>
//         <li>Feature A</li>
//         <li>Feature B</li>
//         <li>Feature C</li>
//       </ul>
//     </CardLayout>

//     <CardLayout title="Contact">
//       <p>Email: example@example.com</p>
//       <p>Phone: 123-456-7890</p>
//     </CardLayout>
//   </div>
// );

// export default App;
// =========================================
// import './App.css';

// import withConditionalCard from './withConditionalCard';
// import SimpleCard from './SimpleCard';

// const ConditionalSimpleCard = withConditionalCard(SimpleCard);

// const App = () => (
//   <>
//     <ConditionalSimpleCard
//       title="Active Card"
//       content="This card is active."
//       disabled={false}
//     />

//     <ConditionalSimpleCard
//       title="Disabled Card"
//       content="This card is disabled."
//       disabled={true}
//     />
//   </>
// );

// export default App;
// ================
// import './App.css';

// function App() {
//   function handleClick() {
//     console.log('Event 1');
//   }

//   return (
//     <>
//       <button onClick={handleClick}>Button 1</button>
//       <button
//         onClick={() => {
//           console.log('Event 2');
//         }}
//       >
//         Button 2
//       </button>
//     </>
//   );
// }

// export default App;
// =============
// import './App.css';
// import Button from './Button';

// function App() {
//   return (
//     <>
//       <Button name={'Home'} />
//       <Button name={'Store'} />
//       <Button name={'contact'} />
//     </>
//   );
// }

// export default App;
// ==========
// import './App.css';

// function App() {
//   return (
//     <>
//       <input
//         onKeyDown={(e) => {
//           console.log(e.key, 'down');
//         }}
//         onKeyUp={(e) => {
//           console.log(e.key, 'up');
//         }}
//       />
//     </>
//   );
// }

// export default App;
// ================
// import './App.css';
// import { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   console.log(useState(0));

//   return (
//     <>
//       <h2>count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <button onClick={() => setCount(count - 1)}>-</button>
//     </>
//   );
// }

// export default App;
// ===========
// import './App.css';
// import { useState } from 'react';

// function App() {
//   const [count, setCount] = useState;
//   const [isPinned, setPinned] = useState(false);

//   const togglePinned = () => {
//     setPinned((p) => !p);
//   };

//   return (
//     <>
//       <h2>count:{count}</h2>
//       <button onClick={() => setCount((c) => c + 1)}>+</button>
//       <button onClick={() => setCount((c) => c - 1)}>-</button>
//       <button onClick={togglePinned}>{isPinned && '📌'} Pinn This!</button>
//     </>
//   );
// }

// export default App;
// =========

// import './App.css';
// import { useState } from 'react';

// function App() {
//   const [todos, setTodos] = useState(['Learn R', 'Build']);
//   const [newTodo, setNewTodo] = useState('');
//   const addTodo = (newTodo) => {
//     setTodos([...todos, newTodo]);
//     setNewTodo('');
//   };
//   const deleteTodo = (index) => {
//     setTodos(todos.filter((_, i) => i !== index));
//   };

//   return (
//     <>
//       <h3>Todo List</h3>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo}
//             <button onClick={() => deleteTodo(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <p>Typing: {newTodo}</p>
//       <input
//         type="text"
//         value={newTodo}
//         onChange={(e) => setNewTodo(e.target.value)}
//       />
//       <button onClick={() => addTodo(newTodo)}>Add New Task</button>
//     </>
//   );
// }

// export default App;
