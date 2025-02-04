import React from 'react'
import data from './db/data.json'
import {Navigation} from "./components/navigation";
import {HoverCard} from "./components/hoverCard";
import {Footer} from "./components/footer";

function App() {
    // data is whatever structure we wrote in data.json
    // Suppose it's an array of pages from Notion
    return (
        <div className="p-4 container mx-auto">
            <Navigation />
            <ul className="grid grid-cols-3 my-20">
                {data.map((page) => {
                    // Example: reading "Name" property
                    const titleProp = page.properties?.Project;
                    const descriptionProp = page.properties?.description;
                    const coverProp = page.properties?.Cover;

                    const coverUrl = coverProp?.files?.[0]?.file?.url;
                    const titleText = titleProp?.title?.[0]?.plain_text || 'Untitled';
                    const description = descriptionProp?.rich_text?.[0]?.plain_text || 'No description';

                    return (
                        <li key={page.id} className="">
                            <HoverCard title={titleText} imgSrc={coverUrl}>
                                {description}
                            </HoverCard>
                        </li>
                    );
                })}
            </ul>
            <Footer className='' />
        </div>
    )
}

export default App