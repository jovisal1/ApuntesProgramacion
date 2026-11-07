import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertArrayEquals;

public class OperacionesTest {
    @Test
    @DisplayName("Sumar dos positivos devuelve cinco")
    void sumarDosPositivosDevuelveSuSuma() {
        // Preparar
        int primero = 2;
        int segundo = 3;
        // Ejecutar
        int obtenido = Operaciones.sumar(primero, segundo);
        // Comprobar
        assertEquals(5, obtenido);
    }

    @Test
    void sumarUnNegativoYUnPositivo() {
        assertEquals(3, Operaciones.sumar(-4, 7));
    }

    @Test
    void sumarCeroConservaElNumero() {
        assertEquals(8, Operaciones.sumar(8, 0));
    }

    @Test
    void esParReconoceUnNumeroPar() {
        assertTrue(Operaciones.esPar(8));
    }

    @Test
    void esParRechazaUnNumeroImpar() {
        assertFalse(Operaciones.esPar(7));
    }

    @Test
    void ceroEsUnaNotaValida() {
        assertTrue(Operaciones.esNotaValida(0));
    }

    @Test
    void diezEsUnaNotaValida() {
        assertTrue(Operaciones.esNotaValida(10));
    }

    @Test
    void unaNotaNegativaNoEsValida() {
        assertFalse(Operaciones.esNotaValida(-0.1));
    }

    @Test
    void unaNotaMayorQueDiezNoEsValida() {
        assertFalse(Operaciones.esNotaValida(10.1));
    }

    @Test
    void prepararSaludoIncluyeElNombre() {
        assertEquals("Hola, Ana", Operaciones.prepararSaludo("Ana"));
    }

    @Test
    void crearIncrementadoConservaElOriginal() {
        int[] original = { 2, 5 };
        int[] obtenido = Operaciones.crearIncrementado(original);
        assertArrayEquals(new int[] { 3, 6 }, obtenido);
        assertArrayEquals(new int[] { 2, 5 }, original);
    }

    @Test
    void crearIncrementadoAdmiteUnArrayVacio() {
        assertArrayEquals(new int[0],
                Operaciones.crearIncrementado(new int[0]));
    }

    @Test
    void calcularMediaAdmiteDecimales() {
        assertEquals(0.15, Operaciones.calcularMedia(0.1, 0.2), 0.000001);
    }

    @Test
    @DisplayName("Un array vacío sigue siendo una referencia no nula")
    void crearIncrementadoDevuelveUnArrayNoNulo() {
        int[] obtenido = Operaciones.crearIncrementado(new int[0]);
        assertNotNull(obtenido);
        assertArrayEquals(new int[0], obtenido);
    }

    @Test
    @DisplayName("La búsqueda devuelve null si el nombre no aparece")
    void buscarNombreAusenteDevuelveNull() {
        String[] nombres = { "Ana", "Luis" };
        String obtenido = Operaciones.buscarNombre(nombres, "Eva");
        assertNull(obtenido);
    }

    @Test
    void buscarNombrePresenteDevuelveSuTexto() {
        String[] nombres = { "Ana", "Luis" };
        assertEquals("Ana", Operaciones.buscarNombre(nombres, "Ana"));
    }
}
