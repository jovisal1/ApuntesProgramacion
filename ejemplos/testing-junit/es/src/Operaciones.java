public class Operaciones {
    public static int sumar(int a, int b) {
        return a + b;
    }

    public static boolean esPar(int numero) {
        return numero % 2 == 0;
    }

    public static boolean esNotaValida(double nota) {
        return nota >= 0 && nota <= 10;
    }

    public static String prepararSaludo(String nombre) {
        return "Hola, " + nombre;
    }

    public static int[] crearIncrementado(int[] datos) {
        int[] copia = new int[datos.length];
        for (int i = 0; i < datos.length; i++) {
            copia[i] = datos[i] + 1;
        }
        return copia;
    }

    public static double calcularMedia(double a, double b) {
        return (a + b) / 2;
    }

    public static String buscarNombre(String[] nombres, String buscado) {
        for (String nombre : nombres) {
            if (buscado.equals(nombre)) {
                return nombre;
            }
        }
        return null;
    }
}
