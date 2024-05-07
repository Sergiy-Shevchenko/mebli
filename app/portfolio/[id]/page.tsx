import Posts from "../portfol.json";

function getData(id: string) {
  let idNum = Number(`${id}`);

  let postEl = Posts.find((post) => post.id === idNum);

  return postEl;
}

type Props = {
  params: {
    id: string;
    };
};

export default function Card({ params: { id } }: Props) {
  const el = getData(id);

  return (
    <div>
      <h4>{el?.title}</h4>
      <h5>{el?.category}</h5>
      <p>{el?.description}</p>
    </div>
  );
}
