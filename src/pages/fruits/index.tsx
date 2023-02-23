import Card from "../../components/Card";
import { Header } from "../../components/Header";

const FruitsList = ({ fruits }: any) => {
  return (
    <>
      <Header />
      <h1>Fruits List</h1>
      <Card fruits={fruits} />
    </>
  );
};

export default FruitsList;
