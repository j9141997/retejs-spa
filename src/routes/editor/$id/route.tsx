import { createFileRoute, useParams } from "@tanstack/react-router";
import { createEditor } from "../-internal/editor";
import { useRete } from "rete-react-plugin";
import { useEffect } from "react";

function Component(): React.ReactElement {
  const { id }: { id: string } = useParams({ strict: false });
  const [ref, editor] = useRete(createEditor);

  useEffect(() => {
    if (editor == null || !id) {
      return;
    }

    editor.load(id);

    return () => {
      editor.destroy();
    };
  }, [editor, id]);

  return (
    <section>
      <div ref={ref} style={{ height: "100vh", width: "100vw" }}></div>
    </section>
  );
}

export const Route = createFileRoute("/editor/$id")({
  component: Component,
});
