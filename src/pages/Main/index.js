import React, { useState, useEffect } from 'react';

import { FaRegComment, FaRegHeart, FaSpinner } from 'react-icons/fa';
import { FiSend, FiBookmark } from 'react-icons/fi';
import { AiOutlineCamera } from 'react-icons/ai';

import api from '../../services/api';

import {
  LoadingContainer,
  Container,
  TitlePageContainer,
  TitleContainer,
  ImageContainer,
  PostContainer,
  PostText,
  IconContainer,
} from './styles';

function Main() {
  const [post, setPost] = useState({});
  const [viewMore, setViewMore] = useState(false);
  const [loading, setLoading] = useState(true);

  async function get() {
    const response = await api.get('/finance');
    setPost(response.data);
  }

  useEffect(() => {
    get();
  }, []);

  useEffect(() => {
    if (post.imageUrl) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [post]);

  return (
    <>
      <TitlePageContainer>
        <strong>Gerador de posts</strong>
        <span>Gerador automático de posts para o instagram</span>
      </TitlePageContainer>

      <Container>
        {post.imageUrl ? (
          <PostContainer>
            <TitleContainer>
              <AiOutlineCamera size={25} color="#111" />
              <strong>Financeiro</strong>
              <FiSend size={25} color="#111" />
            </TitleContainer>
            <ImageContainer>
              <img src={post.imageUrl} alt="img" />
            </ImageContainer>
            <IconContainer>
              <span>
                <FaRegHeart size={25} color="#111" />
                <FaRegComment size={25} color="#111" />
                <FiSend size={25} color="#111" />
              </span>
              <FiBookmark size={25} color="#111" />
            </IconContainer>
            <PostText>
              <strong>{post.title}</strong>
              <span>
                {viewMore
                  ? post.finalNews
                  : `${String(post.finalNews).substring(0, 200)}...`}
                <button
                  type="button"
                  onClick={() => {
                    setViewMore(!viewMore);
                  }}
                >
                  {viewMore ? 'ver menos' : 'ver mais'}
                </button>
              </span>
            </PostText>
          </PostContainer>
        ) : (
          <LoadingContainer loading={loading}>
            <FaSpinner size={60} color="#fff" />
            <span>Gerando notícias...</span>
          </LoadingContainer>
        )}
      </Container>
    </>
  );
}

export default Main;
