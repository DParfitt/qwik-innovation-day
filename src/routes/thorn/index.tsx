import {
  component$,
  useContextProvider,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import {
  DocumentHead,
  RequestHandler,
  useEndpoint,
} from "@builder.io/qwik-city";
import MovingButton from "../../components/button/MovingButton";
import { context } from "./store";
import styles from "./thorn.css?inline";

export default component$(() => {
  const chased = useStore({ chaseCount: 0 });

  const productData = useEndpoint();

  useStylesScoped$(styles);

  useContextProvider(context, chased);
  return (
    <div>
      You have tried to click the button {chased.chaseCount} times
      <div class="host">
        <MovingButton />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik Thorn",
};

export const onGet: RequestHandler = async ({ params }) => {
  // put your DB access here, we are hard coding a response for simplicity.
  return {
    skuId: params.skuId,
    price: 123.45,
    description: `Description for ${params.skuId}`,
  };
};
