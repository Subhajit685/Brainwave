import { notification1 } from "../assets";
import { notificationImages } from "../constants/index";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img
        src={notification1}
        width={62}
        height={62}
        alt="img"
        className="rounded-xl"
      />

      <div className="flex-1">
        <h6 className="mb-1 font-semibold justify-between">{title}</h6>

        <div className="flex items-center justify-between text-base">
          <ul className="flex -m-0.5">
            {notificationImages.map((notificationImage) => (
              <li
                key={notificationImage}
                className="flex w-6 h-6 bottom-2 border-n-12 rounded-full overflow-hidden"
              >
                <img
                  src={notificationImage}
                  className="w-full"
                  width={22}
                  height={22}
                  alt="notificationImage"
                />
              </li>
            ))}
          </ul>

          <div className="body-2 tex-n-13/50">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
