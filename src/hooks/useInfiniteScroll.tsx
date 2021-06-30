import { MutableRefObject, useState, useRef, useMemo } from 'react';
import { PostType } from 'components/Main/PostList';

export type useInfiniteScrollType = {
    containerRef: MutableRefObject<HTMLDivElement | null>;
    postList: PostType[];
};

const NUMBER_OF_ITEMS_PER_PAGE = 10;

const useInfiniteScroll = function (
    selectedCategory: string,
    posts: PostType[],
): useInfiniteScrollType {
    const containerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(
        null,
    );
    const [count, setCount] = useState<number>(1);

    const postListByCategory = useMemo<PostType[]>(
        () =>
            posts.filter(({ node: { frontmatter: { categories } } }: PostType) =>
                selectedCategory !== 'All'
                    ? categories.includes(selectedCategory)
                    : true,
            ),
        [selectedCategory],
    );

    return {
        containerRef,
        postList: postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE),
    };
};

export default useInfiniteScroll;
