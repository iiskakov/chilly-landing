import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import markdownStyles from "./markdown-styles.module.css";
import ReactPlayer from "react-player";

export default function PostBody({content, video}) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles["markdown"]}>
        {documentToReactComponents(content.json)}
      </div>
      {video.map((link) => (
        <ReactPlayer controls={true} url={link} />
      ))}
    </div>
  );
}
