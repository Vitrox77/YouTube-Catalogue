<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ButtonType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UniqueUrlType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('unique_link', UrlType::class, [
                'attr' => [
                    'placeholder' => 'Exemple de lien : https://www.youtube.com/watch?v=c0ruHxX7r3M',
                ],
            ])

            ->add('button', SubmitType::class,
                [
                    'label' => 'Télécharger',
                    'attr' => [
                        'class' => 'btn btn-danger border-radius-button'
                    ],
                ]);
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // Configure your form options here
        ]);
    }
}
