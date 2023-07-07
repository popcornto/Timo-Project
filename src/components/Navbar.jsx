export default function Navbar(props) {
  return (
    <div className={`${props.gridNav} h-28 flex-auto flex row justify-between items-center bg-amber-950`}>
      <h1 className="text-3xl ml-8">Projekt Manager</h1>
      <ul className="flex text-xl gap-3 mr-28">
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
