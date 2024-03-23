import { useState } from "react";
import "./commentList.css";
// import UpdateCommentModal from "./UpdateCommentModal";
import swal from "sweetalert";
import UpdateCommentModal from "./CommentUpdateModal";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../../redux/apiCalls/CommentCall";
import { useNavigate } from "react-router-dom";

const CommentList = ({ comments }) => {
  const { user } = useSelector((state) => state.auth);
  const { post } = useSelector((state) => state.post);
  const [updateComment, setUpdateComment] = useState(false);
  const [commentForUpdate, setCommentForUpdate] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUpdateComment = (comment) => {
    setCommentForUpdate(comment);
    setUpdateComment(true);
  };
  // Delete Comment Handler
  const deleteCommentHandler = (commentId) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this comment!",
      icon: "warning",
      buttons: [true, "Delete"],
      dangerMode: true,
    }).then((ifOk) => {
      if (ifOk) {
        dispatch(deleteComment(commentId));
        navigate(`/post/details/${post._id}`);
      }
    });
  };

  return (
    <div className="comment-list">
      <h4 className="comment-list-count">{comments?.length} Comments</h4>
      {comments?.map((comment) => (
        <div key={comment} className="comment-item">
          <div className="comment-item-info">
            <div className="comment-item-user-info">
              <img
                src={comment?.userId?.profile_photo?.url}
                alt=""
                className="comment-item-user-photo"
              />
              <span className="comment-item-username">{comment?.username}</span>
            </div>
            <div className="comment-item-time">
              <Moment fromNow ago>
                {comment?.createdAt}
              </Moment>{" "}
              ago
            </div>
          </div>
          <p className="comment-item-text">{comment?.text}</p>
          {comment?.userId === user?._id && (
            <div className="comment-item-icon-wrapper">
              <i
                onClick={() => handleUpdateComment(comment)}
                className="bi bi-pencil-square"
              ></i>
              <i
                onClick={() => deleteCommentHandler(comment._id)}
                className="bi bi-trash-fill"
              ></i>
            </div>
          )}
        </div>
      ))}
      {updateComment && (
        <UpdateCommentModal
          commentForUpdate={commentForUpdate}
          setUpdateComment={setUpdateComment}
        />
      )}
    </div>
  );
};

export default CommentList;
