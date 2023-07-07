import RowTop from "./RowTop";
import Row from "./Row";
export default function Table(props) {
  return (
    <div className={`${props.tableDescription} flex flex-col gap- w-screen h-screen bg-green-300`}>
      <RowTop />
      <Row title="" customer="asdfasdfasaaaaaaallo" dateOfdelivery="" price="" bla="asdf"/> 
    </div>
  );
}
