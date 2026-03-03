import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";

export default function Download() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <a href="#">
          <Image
            className="mb-2 h-14 w-full rounded object-cover"
            width={200}
            height={100}
            src="/imgs/blog/4.png"
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
          <p className="text-xs text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </a>
        <a href="#">
          <Image
            className="mb-2 h-14 w-full rounded object-cover"
            width={100}
            height={56}
            src="/imgs/blog/5.png"
            alt="Placeholder image"
          />
          <h4 className="mb-0.5 text-sm font-medium">Lorem ipsum dolor</h4>
          <p className="text-xs text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </a>
      </div>
      <button className="mt-4 ml-auto flex items-center gap-1 text-sm text-indigo-300">
        <span>View more</span>
        <IconArrowRight />
      </button>
    </div>
  );
}
