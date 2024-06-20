import { Suspense } from "react";

import { GithubProfile } from "@/components/github-profile";
import { LongWaitComponent } from "@/components/long-wait-component";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return (
    <div>
      <h1>Home</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quam explicabo deserunt officia repellendus! Amet accusamus consequatur, modi consectetur ratione molestias sequi architecto voluptates? Pariatur sunt voluptatem distinctio ut voluptas.
      </p>

      {/* Suspense faz com que assim que já for carreegado seja exibido na tela o component, e não ter que esperar todos paara poder exibir */}
      <Suspense fallback={<p>Carregando LongWaitComponent</p>}>
        <LongWaitComponent />
      </Suspense>

      <Suspense fallback={<p>Carregando GithubProfile</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  )
}
