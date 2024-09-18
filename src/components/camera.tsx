import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";

export const CameraComponent = () => {
  const videoRef = useRef<HTMLVideoElement>(null!);
  const { data: stream, isSuccess } = useQuery({
    queryKey: ["camera-stream"],
    queryFn: () => navigator.mediaDevices.getUserMedia({ video: true }),
  });

  if (isSuccess && videoRef.current) {
    videoRef.current.srcObject = stream;
  }

  return <video ref={videoRef} autoPlay />;
};
