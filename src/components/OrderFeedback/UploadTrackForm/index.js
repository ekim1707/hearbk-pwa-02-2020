import React, { useState, useRef, useCallback } from "react";
import cx from "classnames";
import "./styles.scss";
import content from "./content";
import InputField from "../../../common/InputField";
import Button from "../../../common/Button";
import IconComponent from "../../../common/IconComponent";
import { ENUMS } from "../../../utils";
const UploadTrackForm = ({
  index,
  trackTitle,
  trackUrl,
  mediaType,
  handleTrackChanges,
  selectedFeedback,
}) => {
  const fileUploadEl = useRef(null);
  const handleTrackDetailsUpdate = useCallback(
    (e) => {
      handleTrackChanges(e, index);
    },
    [index, handleTrackChanges]
  );
  const getFileUploadInputGroup = () => (
    <InputField
      accept=".mp3"
      passableRef={fileUploadEl}
      id="fileUpload"
      type="file"
      className="titleInput"
      onChange={handleTrackDetailsUpdate}
      placeholder={content.YOU_TUBE_LINK_PLACEHOLDER}
    />
  );

  const handleUploadButtonClick = useCallback(() => {
    if (mediaType === ENUMS.MEDIA_TYPE_YOUTUBE) {
      handleTrackDetailsUpdate({ id: "mediaType", value: ENUMS.MEDIA_TYPE_FILEUPLOAD }, index);
      setTimeout(() => fileUploadEl.current.click(), 500);
    } else {
      handleTrackDetailsUpdate({ id: "mediaType", value: ENUMS.MEDIA_TYPE_FILEUPLOAD }, index);
    }
  }, [index, mediaType, handleTrackDetailsUpdate]);

  const handleSelectedFeedback = useCallback((args) => {
    handleTrackDetailsUpdate({ id: "selectedFeedback", value: args }, index);
  }, [handleTrackDetailsUpdate, index]);
  return (
    <section className="uploadTrackFormContainer">
      <header className="uploadTrackHeaderContainer">
        <div className="uploadTrackHeaderText">
          {content.UPLOAD_TRACK_HEADER}
        </div>
        <div className="uploadTrackNumber">{`Track ${index+1}`}</div>
      </header>
      <div className="trackInputContainer">
        <label htmlFor="titleName" className="titleLabel">
          {content.TITLE_LABEL}
        </label>
        <InputField
          id="trackTitle"
          className="titleInput"
          value={trackTitle}
          onChange={handleTrackDetailsUpdate}
          placeholder={content.TITLE_INPUT_PLACEHOLDER}
        />
        <label for="trackUrl" className="titleLabel">
          {mediaType === ENUMS.MEDIA_TYPE_YOUTUBE
            ? content.YOU_TUBE_LABEL
            : content.FILE_TO_UPLOAD_LABEL}
        </label>
        {mediaType === ENUMS.MEDIA_TYPE_YOUTUBE ? (
          <InputField
            id="trackUrl"
            className="titleInput"
            value={trackUrl}
            onChange={handleTrackDetailsUpdate}
            placeholder={content.YOU_TUBE_LINK_PLACEHOLDER}
          />
        ) : (
          getFileUploadInputGroup()
        )}
      </div>
      <div className="orText">{content.OR}</div>
      <div className="buttonWrapper">
        <Button
          buttonText={
            mediaType === ENUMS.MEDIA_TYPE_YOUTUBE
              ? content.UPLOAD_YOUR_TRACK
              : content.ADD_YOUTUBE_URL
          }
          onClick={handleUploadButtonClick}
          className="uploadButton"
        />
      </div>
      <div className="metaInputContainer">
        <label for="trackGenre" className="titleLabel">
          {content.TRACK_GENRE_LABEL}
        </label>
        <InputField
          id="trackGenre"
          className="titleInput"
          value={trackTitle}
          onChange={handleTrackDetailsUpdate}
          placeholder={content.TRACK_GENRE_PLACEHOLDER}
        />
        <IconComponent className="addGenreIcon" iconName="AddCircle" />
      </div>
      <div className="ratingsContainer">
        <div className="ratingsText">{content.RATINGS_TEXT}</div>
        <div className="ratingsButtonWrapper">
          <Button
            buttonText={content.RATINGS_TIER_10}
            className={cx(
              "ratingsButton",
              selectedFeedback === 1 && "isSelected"
            )}
            onClick={() => handleSelectedFeedback(1)}
          />
          <Button
            buttonText={content.RATINGS_TIER_100}
            className={cx(
              "ratingsButton",
              selectedFeedback === 5 && "isSelected"
            )}
            onClick={() => handleSelectedFeedback(5)}
          />
        </div>
      </div>
    </section>
  );
};

export default UploadTrackForm;
