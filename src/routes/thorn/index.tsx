import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import MovingButton from "../../components/button/MovingButton";
import styles from "./thorn.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="host">
      <MovingButton />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik Thorn",
};
