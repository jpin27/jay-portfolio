import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text, Flex, Box } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import FontAwesomeIcon from 'react-fontawesome';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';

const DEVTO_URL = 'https://dev.to';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const CoverImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;

const Post = ({ title, text, image, url, date }) => (
  <Card onClick={() => window.open(url, '_blank')} pb={4}>
    <EllipsisHeading m={3} p={1}>
      {title}
    </EllipsisHeading>
    {image && <CoverImage src={image} height="200px" alt={title} />}
    <Text m={3}>{text}</Text>
    <ImageSubtitle bg="primary" color="white" x="right" y="bottom" round>
      {`${date}`}
    </ImageSubtitle>
  </Card>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

const parsePost = author => postFromGraphql => {
  const { id, slug, createdAt, title, cover_image } = postFromGraphql;

  return {
    id,
    title: 'Testy title',
    date: createdAt,
    cover_image,
    url: `${DEVTO_URL}/${author.username}/${slug}`,
    Component: Post,
  };
};

const MorePosts = ({ username, name, number }) => (
  <Card
    onClick={() => window.open(`${DEVTO_URL}/${username}/`, '_blank')}
    p={4}
  >
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      style={{ height: '100%' }}
    >
      <Box>
        <EllipsisHeading fontSize={5} my={2}>
          Hooray! &nbsp;
          <span role="img" aria-label="party">
            🎉
          </span>
        </EllipsisHeading>
        <Heading lineHeight={1.5}>
          It seems that
          <Text color="secondary">{name}</Text>
          {`has published ${number} more posts!`}
        </Heading>
      </Box>
      <Heading color="primary" mt={5} textAlign="right">
        Go to DEV.to &nbsp;
        <FontAwesomeIcon name="arrow-right" aria-label="Go to DEV.to" />
      </Heading>
    </Flex>
  </Card>
);

MorePosts.propTypes = {
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number,
};

const edgeToArray = data => data.edges.map(edge => edge.node);

const Writing = () => (
  <StaticQuery
    query={graphql`
      query DevPostQuery {
        site {
          siteMetadata {
            isDevToUserDefined
          }
        }
        allDevArticles(
          limit: 7
          sort: { fields: article___created_at, order: DESC }
        ) {
          totalCount
          edges {
            node {
              article {
                id
                slug
                title
                positive_reactions_count
                comments_count
                created_at(formatString: "MMM YYYY")
              }
            }
          }
        }
        author: devArticles {
          article {
            user {
              name
              username
            }
          }
        }
      }
    `}
    render={({ allDevArticles, site, author }) => {
      const posts = edgeToArray(allDevArticles).map(parsePost(author));

      const diffAmountArticles = allDevArticles.totalCount - posts.length;
      if (diffAmountArticles > 0) {
        posts.push({
          ...author,
          id: 'more-field',
          number: diffAmountArticles,
          Component: MorePosts,
        });
      }

      const { isDevToUserDefined } = site.siteMetadata;

      return (
        isDevToUserDefined && (
          <Section.Container id="writing" Background={Background}>
            <Section.Header name="Writing" icon="✍️" label="writing" />
            <CardContainer minWidth="300px">
              {posts.map(({ Component, ...rest }) => (
                <Fade bottom key={rest.id}>
                  <Component {...rest} key={rest.id} />
                </Fade>
              ))}
            </CardContainer>
          </Section.Container>
        )
      );
    }}
  />
);

export default Writing;
