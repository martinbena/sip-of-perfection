function MenuItems({ menu }) {
  return (
    <ul>
      {menu.map((item) => (
        <div key={item.id} className="text-white">
          <p>{item.name}</p>
          <p>${item.price}</p>
          <p>{item.category}</p>
          <img className="h-12 w-12" src={item.imageUrl} alt={item.name} />
        </div>
      ))}
    </ul>
  );
}

export default MenuItems;
