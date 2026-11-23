import type { IconType } from "react-icons";
import {
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiLaravel,
  SiCodeigniter,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTailwindcss,
  SiFastapi,
  SiDjango,
  SiNodedotjs,
  SiExpress,
  SiDocker,
  SiGit,
  SiGithub,
  SiLangchain,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { DiDatabase } from "react-icons/di";

/** OpenAI mark — Simple Icons dropped the brand asset in some versions. */
function OpenAiIcon({
  size = "1em",
  className,
  title,
}: {
  size?: string | number;
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      role="img"
      aria-label={title ?? "OpenAI"}
    >
      {title ? <title>{title}</title> : null}
      <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 004.981 4.18a5.985 5.985 0 00-3.998 2.9 6.046 6.046 0 00.743 7.097 5.98 5.98 0 00.51 4.911 6.051 6.051 0 006.515 2.9A5.985 5.985 0 0013.26 24a6.056 6.056 0 005.774-4.205 5.99 5.99 0 003.997-2.9 6.056 6.056 0 00-.754-7.074zM13.26 22.43a4.476 4.476 0 01-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 00.392-.681v-6.737l2.02 1.168a.071.071 0 01.038.052v5.583a4.504 4.504 0 01-4.494 4.494zM3.6 18.304a4.47 4.47 0 01-.535-3.014l.142.085 4.783 2.759a.771.771 0 00.78 0l5.843-3.369v2.332a.08.08 0 01-.033.062L9.74 19.95a4.5 4.5 0 01-6.14-1.646zM2.34 7.896a4.485 4.485 0 012.366-1.973V11.6a.766.766 0 00.388.676l5.815 3.355-2.02 1.168a.076.076 0 01-.071 0l-4.83-2.786A4.504 4.504 0 012.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 01.071 0l4.83 2.791a4.494 4.494 0 01-.676 8.105v-5.678a.79.79 0 00-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 00-.785 0L9.409 9.23V6.897a.066.066 0 01.028-.061l4.83-2.787a4.5 4.5 0 016.68 4.66zm-12.64 4.135l2.02-1.163a.08.08 0 00.038-.056V8.02l-.51.294.01-.006-1.56.9v.001l-.96.554a.076.076 0 00-.038.057v5.56l2.02-1.168z" />
    </svg>
  );
}

export const techIconMap: Record<string, IconType> = {
  php: SiPhp,
  javascript: SiJavascript,
  typescript: SiTypescript,
  python: SiPython,
  sql: DiDatabase,
  laravel: SiLaravel,
  codeigniter: SiCodeigniter,
  react: SiReact,
  nextjs: SiNextdotjs,
  vue: SiVuedotjs,
  tailwind: SiTailwindcss,
  fastapi: SiFastapi,
  django: SiDjango,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  aws: FaAws,
  docker: SiDocker,
  git: SiGit,
  github: SiGithub,
  openai: OpenAiIcon as IconType,
  langchain: SiLangchain,
};
