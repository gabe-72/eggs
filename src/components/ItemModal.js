import { useEffect, useRef } from "react";
import "../stylesheets/ItemModal.css";

export default function ItemModal(props) {
  const modalRef = useRef(null);
  useEffect(() => {
    modalRef.current.scrollTo(0, 0);
  });

  return (
    <div className={`modal ${props.visible ? "open" : "close"}`}
      onClick={props.closeModal}
      ref={modalRef}
    >
      <div className="modal-content">
        <h1>{props.name}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod ligula eu porttitor elementum. Nullam aliquet erat in ante pulvinar interdum. Integer nisl ipsum, laoreet ornare commodo in, molestie a tortor. Maecenas in porta dolor. Aliquam sit amet odio odio. Morbi in tempor ante. Curabitur vehicula lacus eget turpis euismod luctus. Vestibulum eu mollis sapien, quis cursus magna. Sed mattis libero sit amet lacus placerat, id gravida turpis lacinia. Sed nulla nunc, varius sed elit ut, tempus tincidunt est.<br /><br />
Nam luctus eros a nibh sodales, ut malesuada tellus condimentum. Cras a metus sit amet elit molestie vehicula sit amet sit amet sem. Aliquam sed ullamcorper sem, sed suscipit ipsum. Duis eget tempus elit. Vivamus suscipit turpis tellus, sit amet tempus purus fringilla ac. In a diam finibus, tempus leo quis, condimentum ex. Praesent quis sollicitudin justo, sit amet placerat nibh. Aliquam semper lorem a lobortis ultricies. Cras ac dolor in dui dictum bibendum. Fusce egestas sapien ut lorem tempus auctor. Fusce tellus augue, aliquam non mattis ultrices, viverra eget elit. Donec rhoncus faucibus massa quis consectetur. Cras a vehicula quam. Nullam urna felis, ullamcorper ut auctor ut, porttitor vel tellus.<br /><br />
Phasellus tincidunt, sem a hendrerit sagittis, metus nunc tempor dolor, in viverra ligula turpis ut orci. Vestibulum placerat fringilla diam, ut lacinia risus scelerisque in. Quisque congue iaculis libero, vitae semper tellus dignissim at. Nullam in ullamcorper odio. Nullam condimentum fringilla dui, eu feugiat purus egestas eu. Nulla ex lacus, gravida et ligula sit amet, dapibus vulputate magna. Aenean non sagittis erat, ac imperdiet ex. Integer sit amet vulputate dui.<br /><br />
Aliquam vestibulum nulla sit amet mauris congue, lobortis hendrerit massa vulputate. Proin varius commodo aliquam. In nunc est, posuere vitae aliquam vel, tincidunt ac nunc. Donec et nunc a augue tempor finibus. Curabitur euismod vehicula est et sodales. Duis molestie, urna sit amet viverra congue, orci nisi placerat mi, fringilla faucibus augue sem nec lorem. Mauris volutpat urna sapien, in egestas elit dapibus et.<br /><br />
Donec id dictum ante. Donec ut lobortis ante, viverra congue augue. Nullam nec ipsum elementum, mattis metus ac, posuere ante. Morbi fringilla dictum sem, a dignissim tellus molestie nec. Curabitur lacus dolor, faucibus at lacinia bibendum, pretium nec ante. Integer augue lorem, pharetra eget scelerisque in, imperdiet elementum augue. Etiam pharetra convallis nibh sit amet pulvinar. Pellentesque a nulla condimentum, bibendum eros in, viverra nisi. Phasellus tincidunt augue ac velit sodales, vitae dapibus odio molestie. Ut in arcu non erat rutrum ullamcorper vel a nulla. Sed blandit ut justo vitae consectetur. Ut facilisis mauris nunc, a congue lacus blandit at. Curabitur nulla purus, eleifend ac metus eu, consectetur rutrum sapien.</p>
      </div>
    </div>
  );
}