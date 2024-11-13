import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import ChangeMapPosition from "./ChangeMapPosition";
import { useGeolocation } from "../../hooks/useGeolocation";
//

export default function Location() {
  const position = [51.505, -0.09];
  // const { isLoading, positionGeoLocation, error, getPosition } =
  //   useGeolocation();

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className=" h-[70vh] w-[80%]  border-[10px] rounded-lg border-gray-500">
        {/* {!positionGeoLocation && (
          <button
            type="position"
            // icon={<ImLocation2 size={25} />}
            className={
              "absolute bottom-[6%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-800 mb-5 z-[1500] min-w-[300px] text-center"
            }
            onClick={getPosition}
          >
            Select Current Location
            {isLoading ? <SpinnerLoading /> : "Select Current Location"}
          </button>
        )} */}
        <MapContainer center={position} zoom={10} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>gggg</Popup>
          </Marker>

          <ChangeMapPosition position={position} />
        </MapContainer>
      </div>
    </div>
  );
}
