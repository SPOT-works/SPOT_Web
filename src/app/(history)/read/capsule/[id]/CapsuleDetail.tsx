"use client";

import Cameraview from "@/app/(history)/read/capsule/[id]/CameraView";
import { CloseTab } from "@/components";
import {
  ArrowWardIcon,
  Capsule3DIcon,
  ClickIcon,
  ShadowIcon,
} from "@/components/icons";
import OpenAnimation from "@/app/(history)/read/capsule/[id]/OpenAnimation";
import { useOpenCapsule } from "@/hooks";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useHistoryQuery } from "@/services/message/query";
import { useReadHistoryMutation } from "@/services/message/mutation";

export default function CapsuleDetail() {
  const { dragY, opened, handleTouchStart, handleTouchMove, handleTouchEnd } =
    useOpenCapsule();
  const [isMounted, setIsMounted] = useState(false);
  const params = useParams<{ id: string }>();
  const { data: message } = useHistoryQuery(params.id);
  const { mutate: readHistory } = useReadHistoryMutation();

  useEffect(() => {
    if (message) {
      readHistory(message.id);
    }
  }, [message, readHistory]);

  if (!message) return null;

  return (
    <div className="h-screen w-full overflow-hidden">
      <Cameraview isMounted={isMounted} />
      <div className="relative z-50 px-6 py-3">
        <CloseTab />
      </div>

      <div className="absolute left-1/2 top-1/2 z-50 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        {opened ? (
          <OpenAnimation
            isMounted={isMounted}
            setIsMounted={setIsMounted}
            message={message}
          />
        ) : (
          <div className="flex flex-col items-center gap-5">
            <div className="flex flex-col items-center">
              <ArrowWardIcon />
              <ClickIcon />
            </div>
            <p className="text-t2 text-white">
              위로 밀어 타임캡슐을 열어보세요
            </p>
          </div>
        )}
      </div>

      <div
        className="absolute bottom-2 left-1/2 flex -translate-x-1/2 touch-none flex-col items-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {!opened && (
          <div style={{ transform: `translateY(${dragY}px)` }}>
            <Capsule3DIcon width={120} height={150} rotation={15} />
          </div>
        )}
        {!isMounted && <ShadowIcon />}
      </div>
    </div>
  );
}
