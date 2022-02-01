import Swal from "sweetalert2";

export default function Confirmation(
  title,
  confirmButtonText,
  successFunction
) {
  return Swal.fire({
    title,
    showCancelButton: true,
    confirmButtonText,
  }).then((result) => {
    if (result.isConfirmed) {
      successFunction();
    }
  });
}
