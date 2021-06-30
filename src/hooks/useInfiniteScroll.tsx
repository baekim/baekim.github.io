import { MutableRefObject, useRef } from 'react';
import { PostType } from 'components/Main/PostList';

const useInfiniteScroll = function (
    selectedCategory: string,
    posts: PostType[],
) {
    const containerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(
        null,
    );

    return { containerRef };
};

export default useInfiniteScroll;
