#include <stdio.h>
#include <stdlib.h>
void walk ();
void takeCoke ();
/*��һֻ��լ�������� main����һ�������ˡ�*/
void main () {
    printf("��լ���ˣ�\n");
    /*���˵�ȻҪ����ƬѼ����Ƭ��������������ͳԡ�*/
    printf("����һ����Ƭ��\n");
    /*��Ƭ�Ǹɵģ����׿ʣ� ����һ���ַ����жϿ���û��y��ʾ���ˣ�n��ʾ���ʡ�*/
    char isThirsty[3];
    puts("���������� y��");
    scanf("%2s", isThirsty);
    /*���˵�ȻҪ�ȿ���Ѽ���������û�п��֣���Ҫȥ�����ã�ֻ���ж������ˣ�*/
    if (isThirsty[0] == 'y') {
        walk(1);
        takeCoke();
        walk(0);
    }
    printf("�Ա��ˣ�����������");
}

/*ȥ����[�Ӻ���]������һ��ָʾ��1��ʾ������䣬0��ʾ�ӱ����߻�����*/
void walk (int behavior) {
    if (behavior == 1) {
        printf("������䣻\n");
    } else {
        printf("�߻�����\n");
    }
}

/*�ÿ���[�Ӻ���]*/
void takeCoke () {
    printf("�õ������ˣ�\n");
}