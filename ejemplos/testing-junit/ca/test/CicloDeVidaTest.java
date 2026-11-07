import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.AfterAll;
import static org.junit.jupiter.api.Assertions.assertArrayEquals;

public class CicloDeVidaTest {
    private int[] datos;

    @BeforeAll
    static void iniciarClase() {
        System.out.println("Inici de CicloDeVidaTest");
    }

    @BeforeEach
    void prepararDatos() {
        datos = new int[] { 2, 5 };
        System.out.println("Preparar dades");
    }

    @Test
    @DisplayName("Incrementar després de canviar la primera dada")
    void incrementarTrasCambiarUnDato() {
        datos[0] = 10;
        int[] obtenido = Operaciones.crearIncrementado(datos);
        assertArrayEquals(new int[] { 11, 6 }, obtenido);
    }

    @Test
    @DisplayName("L’altre test rep de nou les dades inicials")
    void incrementarLosDatosIniciales() {
        int[] obtenido = Operaciones.crearIncrementado(datos);
        assertArrayEquals(new int[] { 3, 6 }, obtenido);
    }

    @AfterEach
    void terminarTest() {
        System.out.println("Fi d’un test");
    }

    @AfterAll
    static void terminarClase() {
        System.out.println("Fi de CicloDeVidaTest");
    }
}
