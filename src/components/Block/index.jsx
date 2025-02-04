// src/App.jsx
import React, { useEffect, useState } from 'react'


// This component interprets a single Notion block and renders it
function BlockRenderer({ block }) {
    switch (block.type) {
        case 'heading_1':
            return (
                <h1 className="text-2xl font-bold mb-2">
                    {block.heading_1.rich_text.map(rt => rt.plain_text).join(' ')}
                </h1>
            );
        case 'heading_2':
            return (
                <h2 className="text-xl font-semibold mb-2">
                    {block.heading_2.rich_text.map(rt => rt.plain_text).join(' ')}
                </h2>
            );
        case 'heading_3':
            return (
                <h3 className="text-lg font-medium mb-2">
                    {block.heading_3.rich_text.map(rt => rt.plain_text).join(' ')}
                </h3>
            );
        case 'paragraph':
            return (
                <p className="text-base mb-2">
                    {block.paragraph.rich_text.map(rt => rt.plain_text).join(' ')}
                </p>
            );
        case 'image':
            // image blocks can have "file" or "external" type
            const imageSrc =
                block.image.type === 'file'
                    ? block.image.file.url
                    : block.image.external.url;
            return (
                <div className="my-4">
                    <img src={imageSrc} alt={block.image.caption?.[0]?.plain_text || ''} className="max-w-full h-auto" />
                    {block.image.caption && block.image.caption.length > 0 && (
                        <p className="text-sm text-gray-500">
                            {block.image.caption[0].plain_text}
                        </p>
                    )}
                </div>
            );
        case 'video':
            // similar pattern for videos
            const videoSrc =
                block.video.type === 'file'
                    ? block.video.file.url
                    : block.video.external.url;
            return (
                <div className="my-4">
                    {/* This might be a YouTube link, or a Notion-hosted video */}
                    <video controls src={videoSrc} className="max-w-full h-auto" />
                </div>
            );
        default:
            // fallback for unhandled block types
            return <div className="text-gray-400">[Unsupported block: {block.type}]</div>;
    }
}

export default App
