import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../const/Colors";

interface PasswordModalProps {
  visible: boolean;
  password: string;
  onClose: () => void;
  onSave: () => void;
}

export default function PasswordModal({ visible, password, onClose, onSave }: PasswordModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Senha gerada</Text>

          <View style={styles.passwordBox}>
            <Text style={styles.passwordText}>{password}</Text>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.backButton}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.saveButton} onPress={onSave}>
              <Text style={styles.saveButtonText}>Salvar senha</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    gap: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  passwordBox: {
    width: "100%",
    backgroundColor: "#000",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  passwordText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
  buttons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backButton: {
    fontSize: 16,
    fontWeight: "600",
    paddingHorizontal: 16,
  },
  saveButton: {
    backgroundColor: colors.blue,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});