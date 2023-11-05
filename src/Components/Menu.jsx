function Menu(props) {
  return (
    <article className="w-[340px] bg-white h-max my-4 max-[340px]:w-screen max-md:mx-auto">
      <img
        src={props.props.img}
        alt="image not found"
        className="rounded-t-md w-[340px] h-52 max-md:w-auto max-md:mx-auto"
      />
      <div className="my-4 flex flex-row justify-between mx-2">
        <h2 className="inline capitalize text-xl">{props.props.title}</h2>
        <span className="text-xl bg-orange-400 text-white rounded-md px-2">
          ${props.props.price}
        </span>
      </div>
      <p className="mx-2 my-4">{props.props.desc}</p>
    </article>
  );
}

export default Menu;
