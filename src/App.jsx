function App() {
  const userData = {
    name: 'Shahin Alam',
    contact: '01710522807',
    address: 'Mirpur, Dhaka',
  };

  return (
    <div className="p-10">
      <Header />
      <Banner />
      <Footer />
      <div className="max-w-xl w-full bg-gradient-to-t from-yellow-500 rounded-md p-10 mx-auto mt-10 justify-center">
        <p className="text-red-500 text-3xl text-center font-extrabold">
          {userData.name}
        </p>
        <p className="text-red-500 text-3xl text-center">{userData.contact}</p>
        <p className="text-red-500 text-3xl text-center">{userData.address}</p>
      </div>
    </div>
  );
}

export default App;

function Header() {
  return (
    <h1 className="text-4xl bg-blue-400 text-center font-bold p-6">
      This is Header Section
    </h1>
  );
}

function Footer() {
  return (
    <h1 className="text-2xl bg-blue-100 text-center font-bold p-6">
      This is Footer Section
    </h1>
  );
}

function Banner() {
  return (
    <div className="bg-[url('https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg')] animate-pulse bg-no-repeat max-w-4xl mx-auto border-2 border-red-600 rounded-full p-10 justify-center text-center m-10 ">
      <h1 className="font-bold text-2xl:">
        Dhaka is ths Capital City of Bangladesh
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A perspiciatis
        unde labore! Eaque odit, illum dolor ducimus optio obcaecati repellendus
        expedita, iste temporibus quam <strong>Error</strong>? Cum temporibus
        deserunt voluptates quae.
      </p>
    </div>
  );
}
