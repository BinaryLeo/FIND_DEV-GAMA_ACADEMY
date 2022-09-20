import { useState } from "react";
import { Pressable, Linking } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { toDarkTheme, toLightTheme } from "../../store/modules/Theme.store";
import { MaterialIcons } from "@expo/vector-icons";
import { Sun, Moon } from "phosphor-react-native";
import { IThemeState } from "../../types/IThemeState";
import { IProfile } from "../../types";
import { profile_day, profile_night } from "../../constants/resources";
import BackGround from "../../components/backGround";
import AppButton from "../../components/AppButton";
import SocialIcons from "../../components/socialIcons";
import Footer from "../../components/footer";
import OkModal from "../../components/okModal";
import {
  StyledImage,
  ThemeSwitch,
  AvatarImage,
  StarContainer,
  DevNameText,
  DevInfoContainer,
  DevInfo,
  SocialIconsContainer,
  ButtonsContainer,
  ButtonsInLineContainer,
  ButtonContainer,
} from "./styles";

interface IProfileProps {
  profile: IProfile;
}

export default function Profile(props) {
  const { currentTheme } = useSelector(
    (state: IThemeState) => state.themeState
  );

  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  function setDarkTheme() {
    dispatch(toDarkTheme());
  }

  function setLightTheme() {
    dispatch(toLightTheme());
  }

  const { profile }: IProfileProps = props.route.params;
  const sourceImage = currentTheme == "light" ? profile_day : profile_night;

  const handlePressLinkedin = () => {
    Linking.openURL("https://www.linkedin.com/");
  };

  const handlePressGithub = () => {
    Linking.openURL("https://github.com/");
  };

  const handlePressGoogle = () => {
    Linking.openURL(`mailto:${profile.email}`);
  };

  const handlePressResume = () => {
    setTitle("Resume");
    setText("Starting download now...");
    setShowModal(true);
  };

  const handlePressManageFavoriteProfiles = () => {
    //TODO: FAVORITAR DEV - REQUISITO BÁSICO!!!!

    if (!profile.isFavorite) {
      //dispatch(favoriteDev(profile));
      return;
    }

    //dispatch(unFavoriteDev(profile.id));
    return;
  };

  const handlePressInvite = () => {
    setTitle("Invite");
    setText("Invite sent with success");
    setShowModal(true);
  };

  return (
    <BackGround>
      <StyledImage source={sourceImage} />
      <ThemeSwitch>
        {currentTheme === "light" ? (
          <Pressable onPress={setDarkTheme}>
            <Moon color="#28393A" weight="regular" size={24} />
          </Pressable>
        ) : (
          <Pressable onPress={setLightTheme}>
            <Sun color="#28393A" weight="regular" size={24} />
          </Pressable>
        )}
      </ThemeSwitch>
      <AvatarImage source={{ uri: profile.photo }} />
      <StarContainer>
        <MaterialIcons
          name="star"
          size={24}
          color={profile?.stars > 0 ? "#FFCA28" : "#fff"}
        />
        <MaterialIcons
          name="star"
          size={24}
          color={profile?.stars > 1 ? "#FFCA28" : "#fff"}
        />
        <MaterialIcons
          name="star"
          size={24}
          color={profile?.stars > 2 ? "#FFCA28" : "#fff"}
        />
        <MaterialIcons
          name="star"
          size={24}
          color={profile?.stars > 3 ? "#FFCA28" : "#fff"}
        />
        <MaterialIcons
          name="star"
          size={24}
          color={profile?.stars > 4 ? "#FFCA28" : "#fff"}
        />
      </StarContainer>
      <DevNameText>{profile.fullName}</DevNameText>
      <DevInfoContainer>
        <DevInfo>{`Name: ${profile.name}`}</DevInfo>
        <DevInfo>{`Surname: ${profile.surname}`}</DevInfo>
        <DevInfo>{`Age: ${profile.age} yrs`}</DevInfo>
        <DevInfo>{`Stacks: ${profile.stack.label}`}</DevInfo>
        <DevInfo>{profile.experience}</DevInfo>
      </DevInfoContainer>
      <SocialIconsContainer>
        <SocialIcons
          color={"#D3B81A"}
          onPressLinkedin={handlePressLinkedin}
          onPressGithub={handlePressGithub}
          onPressGoogle={handlePressGoogle}
        />
      </SocialIconsContainer>
      <ButtonsContainer>
        <AppButton title="RESUME" onPress={handlePressResume} />
        <ButtonsInLineContainer>
          <ButtonContainer>
            <AppButton
              title={`${profile.isFavorite ? "UNFAVORITE" : "FAVORITE"}`}
              onPress={handlePressManageFavoriteProfiles}
            />
          </ButtonContainer>
          <ButtonContainer>
            <AppButton title="INVITE" onPress={handlePressInvite} />
          </ButtonContainer>
        </ButtonsInLineContainer>
      </ButtonsContainer>
      <Footer />
      <OkModal
        showModal={showModal}
        title={title}
        text={text}
        setShowModal={setShowModal}
      />
    </BackGround>
  );
}
