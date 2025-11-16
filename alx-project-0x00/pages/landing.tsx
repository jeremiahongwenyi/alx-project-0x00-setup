import Card from "@/components/Card";
import Button from "@/components/Button";
const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title = "small" styles = 'rounded-sm' ></Button>
      <Button title = "medium" styles = 'rounded-md' ></Button>
      <Button title = "large" styles = 'rounded-lg' ></Button>
            <Button title = "Round" styles = 'rounded-full' ></Button>
    </div>
  );
};

export default Landing;
