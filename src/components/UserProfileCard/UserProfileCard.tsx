// src/components/UserProfileCard/UserProfileCard.tsx
import React from "react";
import type { UserProfileCardProps } from "../../types";

/*
  UserProfileCard
  - Shows user avatar (image or initials), name, optional email & role.
  - Optional onEdit callback will be called with the user's id.
  - Designed to be simple and very readable for beginners.
*/

export const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = false,
  showRole = false,
  onEdit,
  children,
}) => {
  const initials = user.name
    .split(" ")
    .map((p) => p[0] ?? "")
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="border rounded p-4 bg-white max-w-sm shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
          {user.avatarUrl ? (
            <img
              src={user.avatarUrl}
              alt={`${user.name} avatar`}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="font-semibold text-gray-700">{initials}</span>
          )}
        </div>

        <div className="flex-1">
          <div className="font-semibold">{user.name}</div>
          {showEmail && (
            <div className="text-sm text-gray-600">{user.email}</div>
          )}
          {showRole && <div className="text-sm text-gray-600">{user.role}</div>}
        </div>

        {onEdit && (
          <button
            onClick={() => onEdit(user.id)}
            className="text-sm px-2 py-1 border rounded hover:bg-gray-50"
          >
            Edit
          </button>
        )}
      </div>

      {children && <div className="mt-3 text-sm text-gray-500">{children}</div>}
    </div>
  );
};

export default UserProfileCard;
