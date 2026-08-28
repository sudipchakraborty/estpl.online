import { Fragment, type ReactNode } from "react";
import "./TextContent.css";

type TextContentProps = {
  content: string;
  skipFirstHeading?: boolean;
};

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /(\*\*([^*]+)\*\*|\[([^\]]+)\]\((https?:\/\/[^)\s]+|mailto:[^)\s]+)\))/g;
  let cursor = 0;

  for (const match of text.matchAll(pattern)) {
    const matchIndex = match.index;
    if (matchIndex > cursor) {
      nodes.push(
        <Fragment key={`text-${cursor}`}>{text.slice(cursor, matchIndex)}</Fragment>,
      );
    }

    if (match[2]) {
      nodes.push(<strong key={`strong-${matchIndex}`}>{match[2]}</strong>);
    } else {
      nodes.push(
        <a key={`link-${matchIndex}`} href={match[4]}>
          {match[3]}
        </a>,
      );
    }

    cursor = matchIndex + match[0].length;
  }

  if (cursor < text.length) {
    nodes.push(<Fragment key={`text-${cursor}`}>{text.slice(cursor)}</Fragment>);
  }

  return nodes;
}

export default function TextContent({
  content,
  skipFirstHeading = false,
}: TextContentProps) {
  const lines = content.replaceAll("\r\n", "\n").split("\n");
  const blocks: ReactNode[] = [];
  let index = 0;
  let firstHeadingSkipped = false;

  while (index < lines.length) {
    const line = lines[index].trim();

    if (!line) {
      index += 1;
      continue;
    }

    if (line.startsWith("# ")) {
      if (!skipFirstHeading || firstHeadingSkipped) {
        blocks.push(<h2 key={`heading-${index}`}>{renderInline(line.slice(2))}</h2>);
      }
      firstHeadingSkipped = true;
      index += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push(<h2 key={`heading-${index}`}>{renderInline(line.slice(3))}</h2>);
      index += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      blocks.push(<h3 key={`subheading-${index}`}>{renderInline(line.slice(4))}</h3>);
      index += 1;
      continue;
    }

    if (line === "---") {
      blocks.push(<hr key={`separator-${index}`} />);
      index += 1;
      continue;
    }

    if (line.startsWith("* ")) {
      const items: ReactNode[] = [];
      const listStart = index;
      while (index < lines.length && lines[index].trim().startsWith("* ")) {
        const item = lines[index].trim().slice(2);
        items.push(<li key={`item-${index}`}>{renderInline(item)}</li>);
        index += 1;
      }
      blocks.push(<ul key={`list-${listStart}`}>{items}</ul>);
      continue;
    }

    const paragraph: string[] = [];
    const paragraphStart = index;
    while (
      index < lines.length &&
      lines[index].trim() &&
      !lines[index].trim().startsWith("#") &&
      !lines[index].trim().startsWith("* ") &&
      lines[index].trim() !== "---"
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    blocks.push(
      <p key={`paragraph-${paragraphStart}`}>{renderInline(paragraph.join(" "))}</p>,
    );
  }

  return <article className="text-content">{blocks}</article>;
}
