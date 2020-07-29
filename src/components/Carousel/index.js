import React from 'react';
import { PropTypes } from 'prop-types';
import { VideoCardGroupContainer, VideoCardList, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';

function VideoCardGroup({ ignoreFirstVideo, category }) {
    const categoryTitle = category.titulo;
    const categoryColor = category.cor;
    const categoryExtraLink = category.link_extra;
    const { videos } = category;
    return (
        <VideoCardGroupContainer>
            {categoryTitle && (
                <>
                    <Title style={{ backgroundColor: categoryColor || 'red' }}>{categoryTitle}</Title>
                    {categoryExtraLink && (
                        <ExtraLink href={categoryExtraLink.url} target="_blank">
                            {categoryExtraLink.text}
                        </ExtraLink>
                    )}
                </>
            )}
            <VideoCardList>
                {videos.map((video, index) => {
                    if (ignoreFirstVideo && index === 0) {
                        return null;
                    }

                    return (
                        <li key={video.titulo}>
                            <VideoCard videoTitle={video.titulo} videoURL={video.url} categoryColor={categoryColor} />
                        </li>
                    );
                })}
            </VideoCardList>
        </VideoCardGroupContainer>
    );
}

VideoCardGroup.propTypes = {
    ignoreFirstVideo: PropTypes.bool.isRequired,
    category: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default VideoCardGroup;
