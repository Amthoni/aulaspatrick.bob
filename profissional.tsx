import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Profissional() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.containerConteudo} showsVerticalScrollIndicator={false}>
        <View style={styles.containerNome}>
          <Text style={styles.nome}>Antoni</Text>
        </View>

        <View style={styles.linha} />

        <View style={styles.containerNome}>
          <Text style={styles.nomeSecundario}>Formação profissional</Text>
        </View>

        <View style={styles.containerDados}>
          <Ionicons name="person-outline" size={20} color="white" />
          <Text style={styles.textoDados}>Estudante técnico desenvolvimento de sistema</Text>
        </View>

        <View style={styles.containerDados}>
          <Ionicons name="book-outline" size={20} color="white" />
          <Text style={styles.textoDados}> Grauacao em word e excel     </Text>
        </View>

        <View style={styles.linha} />

        <View style={styles.containerNome}>
          <Text style={styles.nomeSecundario}>Experiência e habilidades profissionais</Text>
        </View>

        <View style={styles.containerDados}>
          <Ionicons name="briefcase-outline" size={20} color="white" />
          <Text style={styles.textoDados}>   curso de imformatica     </Text>
        </View>

        <View style={{ marginLeft: 30 }}>
          <Text style={styles.textoDados}>1 -      curso de tecnico de desenvolvimento de sistemas        </Text>
          <Text style={styles.textoDados}>2 -        informatica    </Text>
          <Text style={styles.textoDados}>3 -    Performance ao vivo        </Text>
          <Text style={styles.textoDados}>4 -      Domínio de instrumentos (guitarra, teclado  )    </Text>
          <Text style={styles.textoDados}>5 -        Trabalho em estúdio     </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  containerConteudo: {
    padding: 20,
  },
  containerNome: {
    alignItems: "center",
    marginBottom: 10,
  },
  nome: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
  },
  nomeSecundario: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  linha: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  containerDados: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  textoDados: {
    marginLeft: 8,
    color: "red",
    fontSize: 18,
    flexShrink: 1, // para quebrar linha se for muito longo
  },
});