#include <stdio.h>

/*���ǵ�����*/
typedef struct {
    const char *name;
    char *season;
    char *food;
    int age;
} Person;

/*�ӳ���������Ʈÿ�����ڵ���Ϊ��*/
void Action (Person Who) {
    printf("����%s, ���� %i ���ˣ�%s�Ұ���%s��\n",
            Who.name, Who.age, Who.season, Who.food);
}

/*������һ���ļ�*/
void main () {
    /*��ʼ������������İ�Ʈ��*/
    Person Piao = {"��Ʈ", "����", "��", 15};
    /*����Բ��������һ�㡣*/
    Action(Piao);
    /*������ȹ�ӻ����˻��ֻ�ܳ����ˣ�*/
    Piao.season = "����";
    Piao.food = "��";
    Action(Piao);
    /*������������ˣ������ţ�*/
    Piao.season = "����";
    Piao.food = "����";
    Action(Piao);
    /*����̫���ˣ�ֻ�����ڴ��϶��ߣ��Կ�����*/
    Piao.season = "����";
    Piao.food = "����";
    Action(Piao);
}