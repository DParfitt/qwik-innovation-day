import {
  component$,
  useStore,
  useStylesScoped$,
  useSignal,
  useWatch$,
} from "@builder.io/qwik";

import styles from "./MovingButton.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  const state = useStore({
    x: 0,
    y: 0,
    side: "left",
  });

  const ref = useSignal<HTMLDivElement>();

  useWatch$(({ track }) => {
    const xState = track(() => state.x);
    const yState = track(() => state.y);
    const isMouseOverlappingWithButton = (x: number, y: number) => {
      const rect = ref.value?.getBoundingClientRect();

      if (!rect) {
        return false;
      }

      return x > rect.left && x < rect.right && y > rect.top && y < rect.bottom;
    };
    const isOverlapping = isMouseOverlappingWithButton(xState, yState);

    if (isOverlapping && state.side === "left") {
      state.side = "right";
    } else if (isOverlapping && state.side === "right") {
      state.side = "left";
    }
  });

  return (
    <div
      ref={ref}
      class="moving-button"
      document:onMouseMove$={(e) => {
        state.x = e.x;
        state.y = e.y;
      }}
      style={{
        "--margin": state.side === "left" ? 0 : "auto",
      }}
    >
      <a class="button" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        Click Me
      </a>
    </div>
  );
});
