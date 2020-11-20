import Game from "@Components/TicTocToe/Game";

export function PlaygroundA() {
  return (
    <div className="page page-playground-a">
      <Game color="purple" {...{ haha: 123, qq: 456 }} />
    </div>
  );
}
